import React, { useRef } from "react";
import { VStack, Center, Text, Box } from "native-base";
// import UserGreeting from './components/UserGreeting'
import DisplayMoments from '../components/DisplayMoments'
import InputMoment from '../components/InputMoment'
// testing out useRefs
// import ChildComponent from './components/ChildComponent';
const l = (arg) => console.log(arg);


// TREE DESCRIPTION:
// [DashboardScreen]
// [InputMoment, DisplayMoment]
// [SubmitButton, InputSlider], [DisplayMomentsList]]


export default function DashboardScreen( {route, navigation} ) {

// TODO:trying to see what exactly is passed in navigation objects  
  // l(`navigation obj: ${route.par}`);
  // l(`navigation obj: ${route.name}`);
  // l(`navigation obj: ${route.params}`);

// getting the email input from Login
  const { otherParam } = route.params;
  const name = JSON.stringify(otherParam.name).replace(/"/g,"");

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
      <Center h="200"> 
        <Text fontSize="2xl">Hello there {name}!</Text>
      {/* <UserGreeting /> */}
      </Center>
      <VStack space={8} alignItems="center">
        <InputMoment />
      {/* testing out refs:
        <ChildComponent ref={childRef} />
        <Button onPress={() => {childRef.current.sayHi()}}>
          Child Function Call
        </Button>
      */}
        <DisplayMoments />
      </VStack> 
		</Box>
  )
}
