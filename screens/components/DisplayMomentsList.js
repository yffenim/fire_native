import React, { useState, useEffect } from 'react';
import {
  VStack,
  HStack,
  Center,
  Text,
  Box,
  Button,
  Heading,
  FormControl,
  Input,
  Link,
  FlatList,
  Spacer,
  Pressable,
  SectionList,
  AlertDialog,
  Modal,
} from "native-base";

const l = (arg) => console.log(arg);
// const baseURL = "https://api.agify.io/?name=effy"
// const baseURL = "https://limitless-citadel-71686.herokuapp.com/api/alerts/"

// const DisplayMomentsList = (input) => {
// 	return(
// 	<Text>Test for display: {input}</Text>
// )}


// export default function Testing({data, onChildClick}) {
//     return (
//     <Button onPress={onChildClick}><Text>Button</Text></Button>
//   )
// }

const DisplayMomentsList = ({data}) => { 
	return(
    <FlatList data={data} renderItem={({
      item
    }) => <Box borderBottomWidth="1" _dark={{
      borderColor: "gray.600"
    }} borderColor="coolGray.200" pl="4" pr="5" py="2">
            <HStack space={3} justifyContent="space-between">
              <VStack>
                <Text _dark={{
            color: "warmGray.50"
          }} color="coolGray.800" bold>
                  LEVEL: {item.level}
                </Text>
                <Text color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
                  EDIT || DELETE
                </Text>
              </VStack>
              <Spacer />
              <Text fontSize="xs" _dark={{
          color: "warmGray.50"
        }} color="coolGray.800" alignSelf="flex-start">
              Updated: {item.updated_at}
              {/*  Format: {formatTime("2022-04-13T22:56:15.781Z")} */}
              </Text>
            </HStack>
        </Box>} keyExtractor={item => item.id.toString()} />
)};


export default DisplayMomentsList;
