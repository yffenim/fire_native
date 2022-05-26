import React, { useState, useEffect } from 'react';
import { Heading, VStack, Center, Text, Box, Button, useColorModeValue, Pressable, ScrollView } from "native-base";
import { SceneMap } from 'react-native-tab-view';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import API from '../functions/API';
import { modelsAtom } from '../atoms/modelsAtom';
import { userAtom } from '../atoms/userAtom';
import UserFirstTime from '../containers/UserFirstTime';
import UserEdit from '../containers/UserEdit';
import UserGreeting from '../containers/UserGreeting';
import l from "../../helpers/consolelog.js";


export default function TabRouteFirst({navigation}) {
  const [secondsTitle, setSecondsTitle] = useState("");
  const [thirdsTitle, setThirdsTitle] = useState("");
  const [level, setLevel] = useState("");
  const [firstTime, setFirstTime] = useState(true);
  const userData = useRecoilValue(userAtom);
  const userName = userData["name"];
  // const [userForm, showUserForm] = useState(false)

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
    <UserGreeting name={userName} />
    {firstTime &&
      <UserFirstTime
        setLevel={setLevel} level={level}
        secondsTitle={secondsTitle}
        thirdsTitle={thirdsTitle}
        setSecondsTitle={setSecondsTitle}
        setThirdsTitle={setThirdsTitle}
        firstTime={firstTime}
        setFirstTime={setFirstTime}
      />
    }
    {!firstTime &&
      <UserEdit firstTime={firstTime} />
    }
    </Center>
  )
};





