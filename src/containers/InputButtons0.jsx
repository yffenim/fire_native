import React, { useState, useEffect, useRef } from 'react';
import { TouchableHighlight } from 'react-native';
import { Button, useToast, Center } from 'native-base';   
import l from '../../helpers/consolelog';
// import { ToastBox } from './ToastBox';
import { postRequest } from '../functions/ApiRequests.jsx';

// This page contains ALL BUTTON/LINK COMPONENTS FOR CRUD MOMENTS


// HOME SCREEN
// Input Value Buttons
export function ValueButtons({inputValues, colors, setLevel}) {
  // const [buttonSelect, setButtonSelect] = useState("outline");
  const [selectionMode, setSelectionMode] = useState(null);
  


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
// TODO: Update Display
export function SubmitButton({level, model}) {
  // const toast = useToast();

	// const postApiCall = async () => {
    // await postRequest(level, toast);
	// };
  const [ buttonVariant, setButtonVariant ] = useState()


	const handleSubmit = ({model}) => {
    l("Submit with level ", level);
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
        onPress={()=>{
          // handleSubmit();
          onButtonPress("outline");
          // toast.show({render: () => {
          //   return (<ToastBox text={submitMsg} />)
          // }
        // });
      }}>{submitButtonText}</Button>
 	</Center>
	)
}
