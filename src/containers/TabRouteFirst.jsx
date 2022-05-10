import React, { useState, useEffect } from 'react';
import { VStack, Center, Text, Box, Button, Dimensions, useColorModeValue, Pressable} from "native-base";
import { SceneMap } from 'react-native-tab-view';
import l from "../../helpers/consolelog.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import API from '../functions/API';
import { modelsAtom } from '../atoms/modelsAtom';
import { MomentsList } from './MomentsList';


// GET / EDIT / DELETE for Alerts
export default function TabRouteFirst() {
  const [model, setModel] = useRecoilState(modelsAtom);
  setModel("moments");

return (
  <Center>
    <React.Suspense fallback={<Text>Loading...</Text>}>
      <MomentsList />
    </React.Suspense>
  </Center>
  )
};





