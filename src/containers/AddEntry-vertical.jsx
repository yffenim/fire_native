import React, { useState, useEffect } from 'react';
import { Center, Button, Text, HStack, VStack, Heading } from "native-base";
// import { ValueButtons, rowValues, SubmitButton } from "./InputButtons";
import { UserGreeting } from "./UserGreeting"
import { UserSelected } from "./UserSelected"
import { loadingText } from "../presentations/loadingFallback";
import API from '../functions/API';
import { userAtom } from '../atoms/userAtom';
import { ModelButtons } from "./ModelButtons";
import { SubmitButton } from "./SubmitButtons";
import { useRecoilState, useRecoilValue } from 'recoil';
import l from "../../helpers/consolelog.js";
// Make all API calls here?
// set UserAtom

// TODO: 
// - toggle visiblity for current selection stats

// so I want to only load the greeting after the request has finished

export default function AddEntry({model}) {
  const [user, setUser] = useRecoilState(userAtom);
  const [firstValue, setFirstValue] = useState(null);
  const [secondValue, setSecondValue] = useState(null);
  const [thirdValue, setThirdValue] = useState(null);
  const [showStats, setShowStats] = useState(false);

const moments = "moments"
  const seconds = "seconds"
  const thirds = "thirds"

  const api = new API;
  const url = "http://localhost:3000/api/users/"
  const name = user["name"];

  function fetchUser() {
    api.get(url)
      .then(response => {
        setUser(response);
      })
      .catch(error => {console.error(error)
    })
  }

  useEffect(()=>{
    fetchUser();
  },[])

  return (
    <Center>
      <HStack space={5} >
        <VStack>
          <React.Suspense fallback={loadingText}>
            <UserGreeting name={name} />
          </React.Suspense>
          <UserSelected 
            firstValue={firstValue} 
            secondValue={secondValue}
            thirdValue={thirdValue}
          />
        </VStack>
        <ModelButtons 
          model={moments}
          setFirstValue={setFirstValue} 
          setSecondValue={setSecondValue}
          setThirdValue={setThirdValue}
        />
        <ModelButtons 
          model={seconds}
          setFirstValue={setFirstValue} 
          setSecondValue={setSecondValue}
          setThirdValue={setThirdValue}
        />
        <ModelButtons 
          model={thirds}
          setFirstValue={setFirstValue} 
          setSecondValue={setSecondValue}
          setThirdValue={setThirdValue}
        />
        </HStack>
        <SubmitButton />
    </Center>
  );
}




