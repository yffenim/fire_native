import React, { useState, useEffect } from 'react';
import { VStack } from "native-base";
// import child components
import InputSlider from './InputSlider'
import SubmitButton from './SubmitButton'

const l = (arg) => console.log(arg);


export default function InputMoment() {
  const [level, setLevel] = useState({});

// passing from child to parent (from submit button to here)
  function updateDisplay() {
    l("updateDisplay: child -> parent: SubButton -> SubMoment!");
  }

  return (
    <VStack space={5}>
      <InputSlider level={level} setLevel={setLevel} />
      <SubmitButton level={level} updateDisplay={updateDisplay} />
    </VStack>
  );
}



