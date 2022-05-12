import React, { useState }  from 'react';
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
import { fetchMomentsData } from '../functions/fetchModelSelector';
import API from '../functions/API';
import { useRecoilValue, useRecoilState,  useSetRecoilState, useRecoilRefresher_UNSTABLE } from 'recoil';
// import { modelsAtom } from '../atoms/modelsAtom';
import { momentsAtom } from '../atoms/momentsAtom';
import EditPressable from './EditPressable';
import DeletePressable from './DeletePressable';
import l from '../../helpers/consolelog';

// TODO: How to make it listen to a swipe and not a click?

export default function SwipeList({listData, refresh}) {
  const [ id, setId ] = useState(null);


  const onRowDidOpen = rowKey => {
    l("This row opened", rowKey);
  };

// need to get the item id from the row to the 
// Delete / Edit pressables
  const renderItem = ({item, index}) => {

    return (
      <Box>
      <Pressable 
        _dark={{bg: "coolGray.800"}} 
        _light={{bg: "white"}}
        onPress={()=>{
          l("id: ", id);
          setId(item.id)
        }}>
        <Box pl="4" pr="5" py="2">
          <HStack alignItems="center" space={3}>
          <Avatar size="48px" source={{ }} />    
            <VStack>
              <Text color="coolGray.800" _dark={{
                color: "warmGray.50" }} bold>
                  LEVEL: {item.level} for ID: {item.id}
              </Text>
              <Text color="coolGray.600" _dark={{
                color: "warmGray.200" }}>
                  Lasted Updated: {item.updated_at}
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
      <EditPressable id={id} />
      <DeletePressable id={id} refresh={refresh} />
    </HStack>
  );

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

      {/*
      */}
