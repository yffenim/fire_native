import React, { useState }  from 'react';
import { 
  VStack, 
  HStack,
  Center, 
  Text, 
  Box, 
  Button, 
  Dimensions, 
  useColorModeValue, 
  Pressable, 
  Input,
  Heading,
  ScrollView,
  Avatar,
  Spacer
} from "native-base";
import { SwipeListView } from 'react-native-swipe-list-view';
import { SceneMap } from 'react-native-tab-view';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import API from '../functions/API';
import l from '../../helpers/consolelog';
import { modelsAtom } from '../atoms/modelsAtom';

// - [ ]  About Fire
//     - [ ]  Core Concept → a series of pages explaining
//     - [ ]  Github Link to API/Browser/Native
// - [ ]  Customize
//     - [ ]  Colour Themes
//     - [ ]  Logging (Dev Mode)


export default function SettingsAbout() {

  return(
    <Center>
      <Text>Settings: About</Text>
    </Center>
  )
}

