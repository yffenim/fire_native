import React, { useState, useEffect, useRef } from 'react';
import { TouchableHighlight } from 'react-native';
import { Button, useToast, Center } from 'native-base';   
import l from '../../helpers/consolelog';
// import { ToastBox } from './ToastBox';
import { postMomentRequest } from '../functions/MomentsApiRequests.jsx';
import { postSecondRequest } from '../functions/SecondsApiRequests.jsx';
import { postThirdRequest } from '../functions/ThirdsApiRequests.jsx';

// This page contains ALL BUTTON/LINK COMPONENTS FOR CRUD MOMENTS


// HOME SCREEN
// Input Value Buttons
export function ValueButtons({inputValues, colors, setLevel}) {

  function handleValueButton(val){
    setLevel(val);
  }

  return ( 
		<Button.Group>
    	{inputValues.map(val => 
        <Button 
          key={val}
        	borderRadius="25"
          m="4" p="6" size="lg"
          variant="outline"
          colorScheme={colors}
          onPress={()=>
            handleValueButton(val)
          }
        >
          {val}
        </Button>)}
		</Button.Group>  
	)
}

// values for Value Buttons
export const rowValues = 
  [["1","2","3"], ["4","5","6"],["7","8","9"]];


// Submit Value Button (POST request for New Alerts)
// needs to check which model
export function SubmitButton({level, model}) {
  // const toast = useToast();
  // depending o which mode, call a different request
  // l("model: ", model); // PROBLEM IS THAT I NEED SECOND NOT APPETITE
  l("model: ", model);
  const postApiCall = async () => {
    switch (model) {
      case "alertness" : await postMomentRequest(level);
      break;
      case "second" : await postSecondRequest(level);
      break;
      case "third" : await postThirdRequest(level);
      break;
      default: l("Something is wrong in SubmitButton()");
    }
	};

	const handleSubmit = () => {
    // l("Submit with level: ", level);
    // l("Submit with model: ", title);
    // figure out which model is being passed through
    // only call that request
    // or do that in the API request part?

    postApiCall();
  };

  var submitButtonText = `+`;
  // const toast = useToast();
  const submitMsg = "Moment Created!"

  return (
    <Center>
      <Button size="lg" m="6" h="70" w="70"
        borderRadius="60"
        variant="solid"
        colorScheme="indigo"
        onPress={()=>{
          handleSubmit();
          // toast.show({render: () => {
          //   return (<ToastBox text={submitMsg} />)
          // }
        // });
      }}>{submitButtonText}</Button>
 	</Center>
	)
}
