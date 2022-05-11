import React, { useState, useEffect } from 'react';
import { VStack, Center, Text, Box, Button, Dimensions, useColorModeValue, Pressable} from "native-base";
import { SceneMap } from 'react-native-tab-view';
import l from "../../helpers/consolelog.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import API from '../functions/API';
import { modelsAtom } from '../atoms/modelsAtom';


// GET / EDIT / DELETE for Alerts
export default function TabRouteFirst() {

return (
  <Center>
    <Text>TRF</Text>
  </Center>
  )
};





