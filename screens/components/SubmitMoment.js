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
// import child components
import InputSlider from './InputSlider'
import SubmitButton from './SubmitButton'

const l = (arg) => console.log(arg);


export default function SubmitMoment() {
  const [level, setLevel] = useState({});

  // function buttonHandler(){
		// l("button clicked!");		
	// }
// check if moments state has been updated
useEffect(() => {
    l(`useEffect for level: ${level}`);
  }, [level]
)

  return (
    <VStack space={5}>
      <InputSlider level={level} setLevel={setLevel} />
      <SubmitButton level={level} a/>
    </VStack>
  );
}



