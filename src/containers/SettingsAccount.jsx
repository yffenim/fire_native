import React, { useState, useEffect } from 'react';
import { Heading, VStack, Center, Text, Box, Button, useColorModeValue, Pressable} from "native-base";
import { SceneMap } from 'react-native-tab-view';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import API from '../functions/API';
import { modelsAtom } from '../atoms/modelsAtom';
import TrackModelForm from './TrackModelForm';
import SubmitTitles from './SubmitTitles';
import l from "../../helpers/consolelog.js";

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
  const seconds = "seconds"
  const thirds = "thirds"
  const [secondsTitle, setSecondsTitle] = useState("");
  const [thirdsTitle, setThirdsTitle] = useState("");

return (
  <Center>
    <VStack alignItems="center" space={3}>
      <Text>
        Hello! You are being directed here because it's your first time logging on. 
      </Text>
      <Text>
        This app allows you to track your alertness and two other categories. Please create the other two categories now: 
      </Text>
      <Text italic>
        (You can change this later.)
      </Text>
      <TrackModelForm 
        model={seconds}
        setSecondsTitle={setSecondsTitle}
      />
      <TrackModelForm 
        model={thirds} 
        setThirdsTitle={setThirdsTitle}
      />  
      <SubmitTitles 
        secondsTitle={secondsTitle} 
        thirdsTitle={thirdsTitle}
      />
    </VStack>  
  </Center>
  )
};





