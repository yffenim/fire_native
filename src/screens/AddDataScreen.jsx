import React, { useState, useEffect } from 'react';
import { Center, Button, Text, Fab, Heading, Box, VStack, HStack } from "native-base";
import { FirstModelHeading, SecondModelHeading, ThirdModelHeading } from "../containers/ModelHeadings";
// import { userAtom } from "../atoms/userAtom";
// import { secondsTitleAtom, thirdsTitleAtom } from '../atoms/titlesAtoms';
// import API from "../functions/API";
import { loadingText } from "../presentations/loadingFallback";
import { ModelButtons } from "../containers/ModelButtons";
import { SubmitDataFab } from "../containers/SubmitDataFab";
import { useRecoilState, useRecoilValue } from 'recoil';
import l from "../../helpers/consolelog";

// TODO: clear input on screen revisit
// THIS IS RENDERED IN  HOME SCREEN
export default function AddDataScreen({navigation, secondsTitle, thirdsTitle}) {
  const [firstValue, setFirstValue] = useState(null);
  const [secondValue, setSecondValue] = useState(null);
  const [thirdValue, setThirdValue] = useState(null);
  // const [useddr, setUser] = useRecoilState(userAtom);  

  // for tracking which model data is being collected
  const alerts = "alerts/"
  const seconds = "seconds/"
  const thirds = "thirds/"

  // clear input everytime this screen is visited 
  useEffect(() => {
    navigation.addListener('focus', () => {
    // CLEAR INPUT DATA
    });
  },[navigation]);


  return (
    <Center>
      <HStack p="3" m="2" 
        bg="darkBlue.700" 
        borderRadius="10"
      >
        <ModelButtons 
          model={alerts}
          setFirstValue={setFirstValue} 
        />
        <FirstModelHeading firstValue={firstValue} />
      </HStack>   

      <HStack p="3" m="2" 
        bg="darkBlue.800" 
        borderRadius="10"
      >
        <SecondModelHeading 
          secondValue={secondValue} 
          secondsTitle={secondsTitle} 
        />
        <ModelButtons 
          model={seconds}
          setSecondValue={setSecondValue}
        />
      </HStack>
    
      <HStack p="3" m="2" 
        bg="darkBlue.700" 
        borderRadius="10"
      >
        <ModelButtons 
          model={thirds}
          setThirdValue={setThirdValue}
        />
        <ThirdModelHeading 
          thirdValue={thirdValue} 
          thirdsTitle={thirdsTitle}
        />
        </HStack>
        <SubmitDataFab 
          firstValue={firstValue}
          secondValue={secondValue}
          thirdValue={thirdValue}
          secondsTitle={secondsTitle}
          thirdsTitle={thirdsTitle}
        />
      </Center>
  );
}

