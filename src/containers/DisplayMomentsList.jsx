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
import { View } from "react-native";
import EditPressable from './EditPressable';
import DeletePressable from './DeletePressable';
import l from '../../helpers/consolelog';

// TODO: REFACTORRRRR

const DisplayMomentsList = ({data, refresh}) => { 

// l("data is: ", data);

// Inside of <FlatList /> we have two child components: 
// // <EditPressable /> and <DeletePressable />
  return(
    <ScrollView>
      <View>
        <Text>Your Last 20 Entries...</Text>
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
                LEVEL: {item.level}: {item.id}
              </Text>


              <HStack>
                <EditPressable 
                  eId={item.id}
                  eLevel={item.level}
                  eUpdated={item.updated_at}
                  refresh={refresh}
                />
                <Text>   </Text>
                <DeletePressable 
                  deleteId={item.id}
                  refresh={refresh}
                />
              </HStack>

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
    </View>
  </ScrollView>
  )
};


export default DisplayMomentsList;
