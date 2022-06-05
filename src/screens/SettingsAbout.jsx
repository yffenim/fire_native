import React, { useState }  from 'react';
import { 
  VStack, 
  HStack,
  Center, 
  Text, 
  Box, 
  Button, 
  Dimensions, 
  Pressable, 
  Input,
  Heading,
  ScrollView,
} from "native-base";
import { TouchableOpacity } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { SceneMap } from 'react-native-tab-view';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import Communications from 'react-native-communications';
import l from '../../helpers/consolelog';


// - [ ]  About Fire
//     - [ ]  Github Link to API/Browser/Native
// - [ ]  Customize
//     - [ ]  Colour Themes
//     - [ ]  Logging (toggle Dev Mode)

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

