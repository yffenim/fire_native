import React, { useState, useEffect } from 'react';
import {
  VStack,
  HStack,
  Text,
  Box,
  FlatList,
  Spacer,
  Pressable,
  Popover
} from "native-base";
import EditPressable from './EditPressable';
import DeletePressable from './DeletePressable';
import NevermindPressable from './NevermindPressable';
import l from '../../helpers/consolelog';

// TODO: add formatTime()



const DisplayMomentsList = ({data, liftHandleEdit, updateDisplay}) => { 

// lifting up edit bc involves changes to parent UI components
  function handleEdit(id) {
    // l("handleEdit id:", id);
    liftHandleEdit(id);
  }

// please forgive me for not refactoring this FlatList -___- 
// Inside of <FlatList /> we have two child components: 
// <EditPressable /> and <DeletePressable />
	return(
    <FlatList data={data} renderItem={({
      item
    }) => <Box borderBottomWidth="1" 
            _dark={{ borderColor: "gray.600" }} 
            borderColor="coolGray.200" pl="4" pr="5" py="2"
          >
            <HStack space={3} justifyContent="space-between">
              <VStack>
                <Text 
                  _dark={{ color: "warmGray.50" }} 
                  color="coolGray.800" bold
                >
                  LEVEL: {item.level}
                </Text>

                {/* CHILD COMPONENT: EDIT */}     
                <HStack>
                  <EditPressable 
                    handleEdit={()=>{handleEdit(item.id)}}
                    item={item.id}
                  />
                {/* empty space in next line is intentional */}
                  <Text>   </Text> 

                {/* CHILD COMPONENT: DELETE */}     
                  <DeletePressable 
                    item={item.id}
                    updateDisplay={updateDisplay}
                   />
                {/* empty space in next line is intentional */}
                  <Text>   </Text> 
                  <NevermindPressable />
                {/* END CHILD COMPONENTS */}     

                  </HStack>
              </VStack>
              <Spacer />
              <Text fontSize="xs" 
                _dark={{ color: "warmGray.50" }} 
                color="coolGray.800" alignSelf="flex-start"
              >
                Updated: {item.updated_at}
              </Text>
            </HStack>
          </Box>} 
        keyExtractor={item => item.id.toString()} 
    />
  )
};


export default DisplayMomentsList;
