import React, { useState }  from 'react';
import { VStack, Center, Text, Box, Button, Dimensions, useColorModeValue, Pressable, Input} from "native-base";
import { SceneMap } from 'react-native-tab-view';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import API from '../functions/API';
import { SecondsList } from './SecondsList';
import l from '../../helpers/consolelog';
import { modelsAtom } from '../atoms/modelsAtom';

// TODO:
// render name according to current model data 
// have a message for if there's no data

// Display Data from Second Model 
export default function TabRouteSecond() {
  // const [model, setModel] = useRecoilState(modelsAtom);
  // setModel("seconds");

  return(
    <Center>
      <React.Suspense fallback={<Text>Loading...</Text>}>
        <SecondsList />
      </React.Suspense>
    </Center>
  )
}




