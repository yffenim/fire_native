import React, { useState, useEffect, useRef } from 'react';
import { TouchableHighlight } from 'react-native';
import { Button, useToast, Center } from 'native-base';   
import l from '../../helpers/consolelog';
// import { ToastBox } from './ToastBox';
import { postMomentRequest } from '../functions/MomentsApiRequests.jsx';
import { postSecondRequest } from '../functions/SecondsApiRequests.jsx';
import { postThirdRequest } from '../functions/ThirdsApiRequests.jsx';


// This Page contains the Buttons for adding a model entry including the Value Selector button and the Submit button

// TODO:
// - Figure out the colours I want here


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

