import React, { useState, useEffect, useRef } from 'react';
import { Button, useToast, Center } from 'native-base';   
import l from '../../helpers/consolelog';
import { postRequest} from '../api/ApiRequests.jsx'
import { ToastBox } from './ToastBox';

// This page contains ALL BUTTON/LINK COMPONENTS FOR CRUD MOMENTS


// HOME SCREEN
// Input Value Buttons
export function ValueButtons({inputValues, colors, setLevel}) {
  const [buttonSelect, setButtonSelect] = useState("outline")

  function handleValueButton(val){
    setLevel(val);
    // myRef.current = setButtonSelect("solid");
  }

  // const myRef = useRef();
  // useEffect(() => {
  //   myRef.current = setButtonSelect("solid");
  // }, []);

  return ( 
		<Button.Group>
    	{inputValues.map(val => 
      	<Button key={val}
        	borderRadius="25"
          m="3" p="7" size="lg"
          variant={buttonSelect}
          colorScheme={colors}
          // ref={myRef}
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
export function SubmitButton({level}) {
  const toast = useToast();

	const postApiCall = async () => {
    await postRequest(level, toast);
	};

	const handleSubmit = () => {
    // l("Submit with level ", level);
    postApiCall();
  };

  // const toast = useToast();
  const submitMsg = "Moment Created!"

  return (
    <Center>
      <Button size="lg" w="100" h="50" m="5"
        borderRadius="20"
        colorScheme="indigo"
        onPress={()=>{
          handleSubmit();
          // toast.show({render: () => {
          //   return (<ToastBox text={submitMsg} />)
          // }
        // });
			}}>Submit</Button>
 	</Center>
	)
}
