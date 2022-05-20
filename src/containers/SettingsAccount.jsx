import React, { useState, useEffect } from 'react';
import { Heading, VStack, Center, Text, Box, Button, useColorModeValue, Pressable} from "native-base";
import { SceneMap } from 'react-native-tab-view';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import API from '../functions/API';
import { modelsAtom } from '../atoms/modelsAtom';
import TrackModelForm from './TrackModelForm';
import FirstTimeText from '../presentations/FirstTimeText';
// import SubmitTitles from './SubmitTitles'; // the solo one
import l from "../../helpers/consolelog.js";
import { SubmitTitles } from "./SubmitButtons";

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

export default function TabRouteFirst({navigation}) {
  const seconds = "seconds"
  const thirds = "thirds"
  const [secondsTitle, setSecondsTitle] = useState("");
  const [thirdsTitle, setThirdsTitle] = useState("");
  const [level, setLevel] = useState("");
  const [firstTime, setFirstTime] = useState(true);
  // const [errors, setErrors] = React.useState({});
  // const [formData, setData] = React.useState({});

// form validation
  // const validate = () => {
  //   if (formData.name === undefined) {
  //     setErrors({ ...errors,
  //       name: 'Name is required'
  //     });
  //     return false;
  //   } else if (formData.name.length < 3) {
  //     setErrors({ ...errors,
  //       name: 'Name is too short'
  //     });
  //     return false;
  //   }
  //   return true;
  // };


return (
  <Center>
    <VStack alignItems="center" space={3}>
      {firstTime &&
        <FirstTimeText />
      }
      <TrackModelForm 
        // errors={errors}
        setLevel={setLevel} level={level}
        model={seconds} 
        setSecondsTitle={setSecondsTitle}
      />
      <TrackModelForm 
        // errors={errors}
        setLevel={setLevel} level={level}
        model={thirds} 
        setThirdsTitle={setThirdsTitle}
      />  
      <SubmitTitles 
      // validate={validate}
        setFirstTime={setFirstTime}
        level={level}
        secondsTitle={secondsTitle} 
        thirdsTitle={thirdsTitle}
      />
    </VStack>  
  </Center>
  )
};





