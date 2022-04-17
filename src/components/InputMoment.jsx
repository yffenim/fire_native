import React, { useState, useEffect } from 'react';
import { VStack, Button, Text } from "native-base";
// import child components
import InputSlider from './InputSlider'
import SubmitButton from './SubmitButton'
import l from '../../helpers/consolelog'



export default function InputMoment({updateDisplay, editMode, editId}) {
  const [level, setLevel] = useState({});
  const [buttonText, setButtonText] = useState("Submit Me!");
  const [buttonColor, setButtonColor] = useState("indigo");
  const [sliderText, setSliderText] = useState("How Do You Feel?");
  const [sliderColor, setSliderColor] = useState("indigo");


// set state to be Edit Mode for SubmitButton and InputSlider
  function inputMode(){
    setButtonText("Submit Edit");
    setButtonColor("secondary");
  }

// change the state of InputSlider and SubmitButton if in editMode
  useEffect(() => {
    l("editMode state has changed to:", editMode);
    if (editMode) {
      setButtonText("Submit Edit");
      setButtonColor("secondary"); 
      setSliderText("Go Ahead and Edit Level:");
      setSliderColor("secondary");
    }
  }, [editMode]);

  // l("editId from InputMoment", editId);
  // const editRequestId = editId;
  // l("editRequestId: ", editRequestId); 

  return (
    <VStack space={5}>
      <InputSlider 
        level={level} 
        setLevel={setLevel} 
        sliderText={sliderText}
        sliderColor={sliderColor}
      />
      <SubmitButton 
        level={level} 
        updateDisplay={updateDisplay}
        buttonText={buttonText}
        buttonColor={buttonColor}
        editMode={editMode}
        editId={editId}
      />
    </VStack>
  );
}



