import React, { useState, useEffect } from 'react';
import {
  VStack,
  HStack,
  Text,
  Box,
  FlatList,
  Pressable,
  Button, 
  Spacer,
  ScrollView
} from "native-base";
import EditPressable from './EditPressable';
import DeletePressable from './DeletePressable';
import l from '../../helpers/consolelog';

// TODO: REFACTORRRRR

const DisplayMomentsList = ({data, onPressCall}) => { 

// var one = data[0];
// var jsonDate = one.updated_at
// var json = "\"2014-01-01T23:28:56.782Z\"";

// var dateStr = JSON.parse(json);
// l("json time: ", jsonDate); 
// l("parsed time: ", dateStr); 
// var date = new Date(dateStr);
// l("date :", date);
  // var dateStr = JSON.parse(json);

// Inside of <FlatList /> we have two child components: 
// // <EditPressable /> and <DeletePressable />
  return(
    <ScrollView>
      <FlatList data={data} 
        renderItem={({ item }) => 
          <Box borderBottomWidth="1" 
            _dark={{ borderColor: "gray.600" }} 
            borderColor="coolGray.200" pl="4" pr="5" py="2"
          >
          <HStack space={3} justifyContent="space-between">
          <VStack>
            <Text _dark={{ color: "warmGray.50" }} 
              color="coolGray.800" bold 
            >
              LEVEL: {item.level} + ID: {item.id}
            </Text>

            {/* CHILD COMPONENT: EDIT/DELETE */}
            <HStack>
              <EditPressable 
                eId={item.id}
                eLevel={item.level}
                eUpdated={item.updated_at}
                onPressCall={onPressCall}
              />
               <Text>   </Text>
              <DeletePressable 
                deleteId={item.id}
                onPressCall={onPressCall}
              />
            </HStack>
           {/* END CHILD COMPONENT */}


          </VStack>
          <Spacer />
          <Text fontSize="xs" 
            _dark={{ color: "warmGray.50" }} 
            color="coolGray.800" alignSelf="flex-start"
          >
            {item.updated_at}
          </Text>
        </HStack>
      </Box>} 
      keyExtractor={item => item.id.toString()} 
    />
  </ScrollView>
  )
};


export default DisplayMomentsList;
