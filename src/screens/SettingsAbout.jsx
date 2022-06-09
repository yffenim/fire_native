import React, { useState }  from 'react';
import { Center, Text } from "native-base";
import { TouchableOpacity } from 'react-native';
import Communications from 'react-native-communications';
import l from '../../helpers/consolelog';


export default function SettingsAbout() {
  const email = "effymmin@protonmail.com"

  const aboutFire = () => { 
    Communications.web('https://github.com/yffenim/fire_native')  };

  const aboutFireApi = () => { 
    Communications.web('https://github.com/yffenim/fire_api')
  };

  const sendDevEmail = () => {
    Communications.email(
      [email],null,null,'Bug Report for Fire','example')
  };

  return(
    <Center>
      <TouchableOpacity onPress={()=>{aboutFire()}} >
        <Text pb="5" color="violet.400">About Fire</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{aboutFireApi()}} >
        <Text pb="5" color="pink.400">Fire API</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{sendDevEmail()}} >
        <Text pb="5" color="error.400">Report Bugs</Text>
      </TouchableOpacity>
    </Center>
  )
}

