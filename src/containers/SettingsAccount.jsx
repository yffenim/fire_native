import React, { useState, useEffect } from 'react';
import { VStack, Center, Text, Box, Button, Dimensions, useColorModeValue, Pressable} from "native-base";
import { SceneMap } from 'react-native-tab-view';
import l from "../../helpers/consolelog.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import API from '../functions/API';
import { modelsAtom } from '../atoms/modelsAtom';

// - [ ]  About User
//     - [ ]  Edit Password / Email
//     - [ ]  Alertness
//     - [ ]  Set Model 2
//         - [ ]  Name
//         - [ ]  Icon
//     - [ ]  Set Model 3
//         - [ ]  Name
//         - [ ]  Icon
//     - [ ]  Set Reminders
//     - [ ]  Delete Account
// - [ ]  About Fire
//     - [ ]  Core Concept → a series of pages explaining
//     - [ ]  Github
// - [ ]  Customize
//     - [ ]  Colour Themes
//     - [ ]  Logging (Dev Mode)

export default function TabRouteFirst() {

return (
  <Center>
    <Text>USER ACCOUNT PAGE
    </Text>
  </Center>
  )
};





