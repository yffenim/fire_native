import React, { useState, useEffect }  from 'react';
import { 
  VStack, 
  HStack,
  Center, 
  Text, 
  Box, 
  Pressable, 
  Avatar,
  Button
} from "native-base";
import { SwipeListView } from 'react-native-swipe-list-view';
// TODO: change source url to reflect conversion from selector to atoms
import { fetchMomentsData } from '../functions/fetchModelSelector';
import { formatTime } from '../functions/formatTime';
import API from '../functions/API';
import { useRecoilValue, useRecoilState,  useSetRecoilState, useRecoilRefresher_UNSTABLE } from 'recoil';
import { ModelStats, NoStats } from './ModelStats';
import EditPressable from './EditPressable';
import DeletePressable from './DeletePressable';
import l from '../../helpers/consolelog';

// TODO: How to make it listen to a swipe and not a click?


export default function SwipeList({navigation}) {
  const [id, setId] = useState(null);
  const [avg, setAvg] = useState(null);
  const [count, setCount] = useState(null);
  const [dataExists, setDataExists] = useState(false);

  // recoil hook that subscribes data to 
  // selector fetchMomentsData which makes the GET request
  const data = useRecoilValue(fetchMomentsData);
  const listData = data[1];

  // recoil hook that refreshes page when changes happen
  const refresh = useRecoilRefresher_UNSTABLE(fetchMomentsData);

  // ROW ACTIONS
  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const onRowDidOpen = rowKey => {
    l("This row opened", rowKey);
  };

  // const deleteRow = (rowMap, rowKey) => {
  //   closeRow(rowMap, rowKey);
  //   const newData = [...listData];
  //   const prevIndex = listData.findIndex(
  //     item => item.key === rowKey
  //   );
  //   newData.splice(prevIndex, 1);
  //   setListData(newData);
  // };

  // TODO: MAKE THE ROW LISTEN TO SWIPE NOT CLICK
  const renderItem = ({item, index}) => {
    // var updated_str = item["updated_at"];
    // l("updated str: ", updated_str);

    return (
    <Box>
      <Pressable 
        _dark={{bg: "darkBlue.900"}} 
        _light={{bg: "white"}}
        onPress={()=>{
          l("id: ", id);
          setId(item.id)
        }}>
        <Box pl="4" pr="5" py="2"
        >
          <HStack alignItems="center" space={3}>
            <Button
              colorScheme="pink"
              borderRadius="25"
              m="1" p="3" w="12" h="12"
            ></Button>
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
      <EditPressable id={id} refresh={refresh} />
      <DeletePressable id={id} refresh={refresh} />
    </HStack>
  );

  // set state for average/count when page refreshes
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

  // Returning the components
  return (
    <Box safeArea flex="1" > 

      <Box bg="coolGray.800" mb="3">
        {dataExists &&
          <ModelStats avg={avg} count={count}/>
        }
        {!dataExists &&
          <NoStats navigation={navigation} />
        }
      </Box>

      <Box bg="coolGray.800"> 
        <SwipeListView 
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

{/*       
<Avatar size="48px" source={{ }} />
*/}
