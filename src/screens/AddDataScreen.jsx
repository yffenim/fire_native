import React, { useState, useEffect } from 'react';
import { Center, HStack } from "native-base";
import { FirstModelHeading, SecondModelHeading, ThirdModelHeading } from "../containers/ModelHeadings";
import { loadingText } from "../presentations/loadingFallback";
import { ModelButtons } from "../containers/ModelButtons";
import { SubmitDataFab } from "../containers/SubmitDataFab";
import { useRecoilState, useRecoilValue } from 'recoil';
import l from "../../helpers/consolelog";


// THIS IS RENDERED IN  HOME SCREEN
export default function AddDataScreen({navigation, secondsTitle, thirdsTitle}) {
  const [firstValue, setFirstValue] = useState(null);
  const [secondValue, setSecondValue] = useState(null);
  const [thirdValue, setThirdValue] = useState(null);

  // for tracking which model data is being collected
  const alerts = "alerts/"
  const seconds = "seconds/"
  const thirds = "thirds/"

  // clear input everytime this screen is visited 
  useEffect(() => {
    navigation.addListener('focus', () => {
      setThirdValue(null);
      setSecondValue(null);
      setThirdValue(null);
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
          firstValue={firstValue} setFirstValue={setFirstValue}
          secondValue={secondValue} setSecondValue={setSecondValue}
          thirdValue={thirdValue} setThirdValue={setThirdValue}
          secondsTitle={secondsTitle}
          thirdsTitle={thirdsTitle}
        />
      </Center>
  );
}

