import React, { useState, useEffect } from 'react';
import { Center, Button, Text, Fab, Heading, Box, VStack, HStack } from "native-base";
import { FirstModelHeading, SecondModelHeading, ThirdModelHeading } from "../containers/ModelHeadings";
// import { userAtom } from "../atoms/userAtom";
import { secondsTitleAtom, thirdsTitleAtom } from '../atoms/titlesAtoms';
// import API from "../functions/API";
import { loadingText } from "../presentations/loadingFallback";
import { ModelButtons } from "../containers/ModelButtons";
import { SubmitDataFab } from "../containers/SubmitDataFab";
import { useRecoilState, useRecoilValue } from 'recoil';
import l from "../../helpers/consolelog";


// THIS IS RENDERED IN  HOME SCREEN
export default function AddDataScreen({navigation,secondsTitle, thirdsTitle}) {
  const [firstValue, setFirstValue] = useState(null);
  const [secondValue, setSecondValue] = useState(null);
  const [thirdValue, setThirdValue] = useState(null);
  // const [user, setUser] = useRecoilState(userAtom);  

  // set atom state for titles
	// const [secondsTitle, setSecondsTitle ] = useRecoilState(secondsTitleAtom);
	// const [thirdsTitle, setThirdsTitle] = useRecoilState(thirdsTitleAtom);

  // for tracking which model data is being collected
  const alerts = "alerts/"
  const seconds = "seconds/"
  const thirds = "thirds/"

  // reload everytime this screen is visited 
  useEffect(() => {
    navigation.addListener('focus', () => {
    // CLEAR INPUT DATA
    });
  },[navigation]);

  // get and set user atom
  // const api = new API;
  // const url = "http://localhost:3000/api/users/"
  
  // function fetchUser() {
  //   api.get(url)
  //     .then(response => {
  //       setUser(response);
  //       l("response from fetchUser is:" , response);
  //       setSecondsTitle(response[1]["secondsTitle"]);
  //       setThirdsTitle(response[1]["thirdsTitle"]);
  //     })
  //     .catch(error => {console.error(error)
  //   })
  // }

  // useEffect(()=>{
  //   fetchUser();
  // },[])

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
          // secondsTitle={secondsTitle}
          // thirdsTitle={thirdsTitle}
        />
      </Center>
  );
}

