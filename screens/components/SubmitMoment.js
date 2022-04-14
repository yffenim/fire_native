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


export default function SubmitMoment({updateMoments}) {
  const [level, setLevel] = useState({});

// passing from child to parent (from submit button to here)
  function updateDisplay() {
    l("update display in parent of SubButton aka SubMoment!");
    updateMoments();
  }
  // function buttonHandler(){
		// l("button clicked!");		
	// }

// after submitting
// lift state up from child to here, then from here to top level 
// so that can be passed to sibling component

  return (
    <VStack space={5}>
      <InputSlider level={level} setLevel={setLevel} />
      <SubmitButton level={level} updateDisplay={updateDisplay} />
    </VStack>
  );
}



