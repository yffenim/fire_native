import React, { useState }  from 'react';
import { 
  VStack, 
  HStack,
  Center, 
  Text, 
  Box, 
  Pressable, 
  Avatar,
} from "native-base";
import { SwipeListView } from 'react-native-swipe-list-view';
import { fetchMomentsData } from '../functions/fetchModelSelector';
import API from '../functions/API';
import { useRecoilValue, useRecoilRefresher_UNSTABLE } from 'recoil';
// import { modelsAtom } from '../atoms/modelsAtom';
import EditPressable from './EditPressable';
import DeletePressable from './DeletePressable';
import l from '../../helpers/consolelog';


export default function SwipeList() {

  // recoil hook that subscribes listData 
  // to the selector fetchMomentsData
  const listData = useRecoilValue(fetchMomentsData);
  
  // recoil hook that refreshes page when changes happen
  const refresh = useRecoilRefresher_UNSTABLE(fetchMomentsData);
  // l("Data from SwipeList:", listData);

  // actions for each row
  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
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

  const onRowDidOpen = rowKey => {
    l("This row opened", rowKey);
  };

// render each row
  const renderItem = ({item, index}) => (
  <Box>
    <Pressable 
      onPress={() => l("You touched me")} 
      _dark={{bg: "coolGray.800"}} 
      _light={{bg: "white"}}
    >
        <Box pl="4" pr="5" py="2">
          <HStack alignItems="center" space={3}>
          <Avatar size="48px" source={{
          }} />    
            <VStack>
              <Text color="coolGray.800" _dark={{
              color: "warmGray.50"
            }} bold>
                LEVEL: {item.level}
              </Text>
              <Text color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>
                Lasted Updated: {item.updated_at}
              </Text>
            </VStack>
          </HStack>
        </Box>
      </Pressable>
      </Box>
    )

// Swipe left shows Edit and Delete options
  const renderHiddenItem = (data, rowMap) => (
    <HStack flex="1" pl="2">
      <EditPressable refresh={refresh} />
      <DeletePressable refresh={refresh} />
    </HStack>
  )

// Returning the SwipeList
  return ( 
    <Box 
      bg="coolGray.800" 
      safeArea flex="1"
       borderRadius="10"
    > 
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
  )
}

