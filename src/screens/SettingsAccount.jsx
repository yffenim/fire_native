import React, { useState, useEffect } from 'react';
import { Heading, VStack, Center, Text, Box, Button, useColorModeValue, Pressable, ScrollView } from "native-base";
import { SceneMap } from 'react-native-tab-view';
// import { useRecoilState, useRecoilValue } from 'recoil';
import API from '../functions/API';
// import { userAtom } from '../atoms/userAtom';
import UserSettings from '../containers/UserSettings';
// import UserGreeting from '../containers/UserGreeting';
// import { userURL } from '../functions/APIDevUrl';
// import { LoadingSpinner } from '../presentations/LoadingSpinner';
import l from "../../helpers/consolelog.js";


export default function TabRouteFirst() {

  return (
    <Center>
      <UserSettings />
    </Center>
  )
};





