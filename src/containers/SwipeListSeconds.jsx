import React, { useState, useEffect, useRef }  from 'react';
import {
  VStack,
  HStack,
  Text, 
  Box, 
  Pressable, 
  Avatar,
  Button,
} from "native-base";
import { SwipeListView } from 'react-native-swipe-list-view';
import { secondsTitleAtom } from '../atoms/titlesAtoms';
import API from '../functions/APImodels';
import { baseURL } from '../functions/APIDevUrl';
import { headersAtom } from '../atoms/headersAtom';
import { useRecoilValue, useRecoilState, useRecoilRefresher_UNSTABLE } from 'recoil';
import { formatTime } from '../functions/formatTime';
import { levelColour } from '../functions/levelColour';
import { ModelStats, NoStats } from './ModelStats';
import EditPressable from './EditPressable';
import DeletePressable from './DeletePressable';
import EditDialog from './EditDialog';
import l from '../../helpers/consolelog';


export default function SwipeListSeconds({navigation, urlModel, fetchSecondsData}) {
  const [id, setId] = useState(null);
  const [avg, setAvg] = useState(null);
  const [count, setCount] = useState(null);
  const [dataExists, setDataExists] = useState(false);
  const model = useRecoilState(secondsTitleAtom);
  const headers = useRecoilValue(headersAtom);

  // refactor this so its clearer that this is for EditDialog
  const [ isOpen, setIsOpen ] = React.useState(false);

  // API call for EDIT goes here because
  // we need it accessible in mutliple child components
  const [entry, setEntry] = useState({});
  const [updated, setUpdated] = useState(null);
  const api = new API;

  const getEntry = (id) => {
		let urlWithId = baseURL + urlModel + id;
		l("headers:", headers);
		api.get(urlWithId, headers)
			.then(response => {
				// l(response);
        setEntry(response);
        let updated = response["updated_at"] 
        let formatted = formatTime(updated)
        setUpdated(formatted);
			})
			.catch(error => {
				console.error(error);
			});
	};

  // refresh state for average/count if page refreshes
  useEffect(()=>{
    if ( data.length > 0 ) {
      setDataExists(true)
      setAvg(data[0]["avg"]);
      setCount(data[0]["count"]);
    } else {
      l("there is no fetched data")
    }
  }
  ,[])

  // reload everytime this screen is visited 
  useEffect(() => {
    navigation.addListener('focus', () => {
    refresh();
    });
  },[navigation]);

  // API call for GET display
  // recoil hook that subscribes data to selector 
  const data = useRecoilValue(fetchSecondsData);
  const listData = data[1];

  // recoil hook that refreshes page on change
  const refresh = useRecoilRefresher_UNSTABLE(fetchSecondsData);


  ////////// ROW ACTIONS //////////
  // close row
  const closeRow = (rowMap, rowKey) => {
    l("Closed oid: ", rowKey);
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  // set oid for delete/edit actions
  const onRowDidOpen = rowKey => {
    l("Swiped oid: ", rowKey);
    setId(rowKey);
  };


  // row objects for the SwipeList (same formatting as FlatList)
  const renderItem = ({item, index}) => {
    return (
    <Box>
      <Pressable 
        _dark={{bg: "darkBlue.900"}} 
        _light={{bg: "white"}}      
      >
        <Box pl="4" pr="5" py="2"
        >
          <HStack alignItems="center" space={3}>
            <Avatar bg={levelColour(item.level)}></Avatar>
            <VStack>
              <Text color="coolGray.800" _dark={{
                color: "warmGray.50" }} bold>
                  LEVEL: {item.level} for ID: {item.id}
              </Text>
              <Text color="coolGray.600" _dark={{
                color: "warmGray.200" }}>
                  Updated: {formatTime(item.updated_at)}
              </Text>
              </VStack>
          </HStack>
        </Box>
      </Pressable>
      </Box>
    )
  };

  // Swipe left shows Edit and Delete options
  const renderHiddenItem = (listData, rowMap) => (
    <HStack flex="1" pl="2">
      <EditPressable 
        id={id} 
        getEntry={getEntry}
        refresh={refresh} 
        closeRow={closeRow}  
        rowMap={rowMap}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <DeletePressable 
        id={id} urlModel={urlModel}
        refresh={refresh} 
      />
      <EditDialog 
        id={id} urlModel={urlModel}A
        refresh={refresh}
        entry={entry}
        updated={updated}
        rowMap={rowMap}
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        closeRow={closeRow}
      />
    </HStack>
  );


  // Returning the components
  return (
    <Box safeArea flex="1" >

      <Box bg="coolGray.800" mb="3">
        {dataExists &&
          <ModelStats 
            model={model}
            avg={avg} count={count}/>
        }
        {!dataExists &&
          <NoStats navigation={navigation} />
        }
      </Box>

      <Box bg="coolGray.800"> 
        <SwipeListView 
          keyExtractor={item => item.id}
          data={listData} 
          renderItem={renderItem} 
          renderHiddenItem={renderHiddenItem} 
          rightOpenValue={-130} 
          previewRowKey={"0"} 
          previewOpenValue={-40} 
          previewOpenDelay={3000} 
          onRowDidOpen={onRowDidOpen} 
        />
      </Box>
    </Box>
  )
}


