import React from 'react';
import { VStack, Center, Text, Box, Button, Dimensions, useColorModeValue, Pressable} from "native-base";
import { SceneMap } from 'react-native-tab-view';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import l from '../../helpers/consolelog';
import API from '../functions/API';
import { headersAtom } from '../atoms/headersAtom';


export default function TabRouteSecond() {
  const [header, setHeader] = useRecoilState(headersAtom);
  // TODO: 
  // I make a request and get a response header back with updated data that I need for my next request
  // I save this data into a header atom object that is accessible elsewhere
  // when I make my next request, I have an updated set



  const test = () => {
    setHeader({"uid": "changed"});
  }

  return(
    <Center>
      <Text>Third</Text>
      <Text>Atom: {header.uid}</Text>
      <Button onPress={()=>{test()}}>TEST</Button>
    </Center>
  )
}

