import React, { useState, useEffect } from "react";
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

// const l = (arg) => console.log(arg);

export default function DashboardScreen() {
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
        <SubmitMoment />
        <DisplayMoments />
      </VStack> 
		</Box>
  )
}
