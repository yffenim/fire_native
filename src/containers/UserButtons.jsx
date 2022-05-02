import React from "react";
import { Button, Link, HStack, Text } from 'native-base';
import { postSignInRequest, postSignUpRequest, validateTokenRequest } from '../functions/AuthApiRequests.jsx'
import l from '../../helpers/consolelog';



export const SubmitButton = () => {

  const handleUpdate = () => {
    l("clicked");
  };

  return (
    <Button  
      m="10" variant="outline"
      colorScheme="indigo" 
      onPress={()=>{handleUpdate()}}
    >
      Submit Changes
    </Button>
  )
}

export const DeleteButton = () => {

  const handleDelete = () => {
    l("clicked");
  };

  return (
    <Button  
      m="10" variant="outline"
      colorScheme="indigo" 
      onPress={()=>{handleDelete()}}
    >
      Delete User
    </Button>
  )
}



