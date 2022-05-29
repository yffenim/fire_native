import React, { useState, useEffect } from 'react';
import { Center, Button, Text, Fab, Heading, Box, VStack, HStack } from "native-base";
import { FirstModelHeading, SecondModelHeading, ThirdModelHeading } from "../containers/ModelHeadings";
import { loadingText } from "../presentations/loadingFallback";
import { ModelButtons } from "../containers/ModelButtons";
import { SubmitDataFab } from "../containers/SubmitDataFab";
import { useRecoilState, useRecoilValue } from 'recoil';
import l from "../../helpers/consolelog";


// ADD NEW DATA SCREEN
export default function AddEntry({navigation}) {
  // const [user, setUser] = useRecoilState(userAtom);
  const [firstValue, setFirstValue] = useState(null);
  const [secondValue, setSecondValue] = useState(null);
  const [thirdValue, setThirdValue] = useState(null);

  // for tracking which model data is being collected
  const alertness = "alertness"
  const seconds = "seconds"
  const thirds = "thirds"

// GET USER NAME - NOT IN USE
//   const api = new API;
//   const url = "http://localhost:3000/api/users/"
//   const name = user["name"];

//   function fetchUser() {
//     api.get(url)
//       .then(response => {
//         setUser(response);
//       })
//       .catch(error => {console.error(error)
//     })
//   }

//   useEffect(()=>{
//     fetchUser();
//   },[])

  return (
    <Center>
      <HStack p="3" m="2" 
        bg="darkBlue.700" 
        borderRadius="10"
      >
        <ModelButtons 
          model={alertness}
          setFirstValue={setFirstValue} 
        />
        <FirstModelHeading firstValue={firstValue} />
      </HStack>   

      <HStack p="3" m="2" 
        bg="darkBlue.800" 
        borderRadius="10"
      >
        <SecondModelHeading secondValue={secondValue} />
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
        <ThirdModelHeading thirdValue={thirdValue} />
        </HStack>
        <SubmitDataFab 
          firstValue={firstValue}
          secondValue={secondValue}
          thirdValue={thirdValue}
        />
    </Center>
  );
}

