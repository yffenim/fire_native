import React, { useRef } from "react";
import { VStack, Center, Text, Box } from "native-base";
import l from "../helpers/consolelog.js";
import { getLoginName } from "../src/navigations/navParams.js";
import UserGreeting from '../src/components/UserGreeting'
import DisplayMoments from '../src/components/DisplayMoments'
import InputMoment from '../src/components/InputMoment'
// testing out useRefs
// import ChildComponent from './components/ChildComponent';
  // const l = (arg) => console.log(arg);

export default function DashboardScreen( {route, navigation} ) {
  
  const name = getLoginName(route.params);
  // l("Dashboard screen:", name);
// testing out Refs from ChildComponent
  const childRef = useRef() 
  // function updateMoments() {
  //   l("update from in TOP parent!");
  // }

  return (
    <Box
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
      h="10"
    >
      <VStack space={4}>
        <UserGreeting name={name}/>
        <InputMoment />
        <DisplayMoments />
      </VStack>
		</Box>
  )
}
