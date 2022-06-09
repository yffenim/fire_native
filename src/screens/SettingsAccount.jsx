import React from 'react';
import { Center } from "native-base";
import { SceneMap } from 'react-native-tab-view';
import UserSettings from '../containers/UserSettings';
import l from "../../helpers/consolelog.js";


export default function TabRouteFirst() {
  return (
    <Center>
      <UserSettings />
    </Center>
  )
};





