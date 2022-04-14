import React, { useState, useEffect, useRef } from "react";
import {
  VStack,
  HStack,
  Center,
  Text,
  Box,
  Button,
  NativeBaseProvider,
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
import UserGreeting from './components/UserGreeting'
import DisplayMoments from './components/DisplayMoments'
import SubmitMoment from './components/SubmitMoment'

// testing out useRefs
import ChildComponent from './components/ChildComponent';

const l = (arg) => console.log(arg);

// TOP LEVEL COMPONENT: [DashboardScreen]
// then: [SubmitMoment, DisplayMoment]
// then: [SubmitButton, InputSlider], [DisplayMomentsList]]
export default function DashboardScreen() {
  

// passing from child to parent (from SubmitMoment to here)
// trigger
  function updateMoments() {
    l("update from in TOP parent!");
  }

// useRef is passed into DisplayMoments so we can grab a function from there
  const childRef = useRef() 

  return (
    <Box
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
      h="10"
     >
      <Center h="200"> 
        <UserGreeting />
      </Center>
      <VStack space={8} alignItems="center">
        <SubmitMoment updateMoments={updateMoments} />
        <DisplayMoments />
        {/*
        <ChildComponent ref={childRef} />
        <Button onPress={() => {childRef.current.sayHi()}}>
          Child Function Call
        </Button>

        */}
      </VStack> 
		</Box>
  )
}
