import React, { useEffect } from 'react';
import { Center, Button, Text } from "native-base";
// import { ValueButtons, rowValues, SubmitButton } from "./InputButtons";
import UserGreeting from "./UserGreeting"
import { loadingText } from "../presentations/loadingFallback";
import API from '../functions/API';
import { userAtom } from '../atoms/userAtom';
import { ValueButtons, rowValues, SubmitButton } from "./InputButtons";
import { useRecoilState, useRecoilValue } from 'recoil';
import l from "../../helpers/consolelog.js";
// Make all API calls here?
// set UserAtom

// This page needs:
// Greeting 
// Buttons

// so I want to only load the greeting after the request has finished

export default function AddEntry({model}) {
  const [user, setUser] = useRecoilState(userAtom);
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
      <React.Suspense fallback={loadingText}>
        <UserGreeting name={name} />
      </React.Suspense>
      <ValueButtons />
    </Center>
  );
}




