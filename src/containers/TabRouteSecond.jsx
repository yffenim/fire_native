import React, { useState }  from 'react';
import { VStack, Center, Text, Box, Button, Dimensions, useColorModeValue, Pressable, Input} from "native-base";
import { SceneMap } from 'react-native-tab-view';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import l from '../../helpers/consolelog';
// import { DetailsWithSuspense } from '../functions/selectors/DetailsWithSuspense';
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function TabRouteSecond() {

  const momentsURL = 'http://localhost:3000/api/alerts/';
  // subscribing to the Selector
  const [headers, setHeaders] = useState({});

  const onPress = () => {
    l("clicked!");
    getData();
    l("headers: ", headers);
  }

  const getData = async () => {
    // l("get data");
    try {
      const jsonValue = await AsyncStorage.getItem('requestHeaders')
      let value = jsonValue != null ? JSON.parse(jsonValue) : null;
      setHeaders(value)
    } catch(e) {
      l("Error from MomentsApiRequests async retrieval: ", e);
     }
  }

  const tempHeaders = {
  "access-token": "ECpReG6avxCtCCa0f7GlgQ",
  "client": "Te9lgDozQZbWoek55hhYCQ",
  "expiry": "1653387777",
  "token-type": "Bearer",
  "uid": "ada@ardour.com",
};



// Selector that fetches data
  const fetchAlertnessDetails = selector({
    key: 'userDetailsSelector',
    get: async ({ get }) => {
        try {
        const response = await fetch(momentsURL, {
            headers: {tempHeaders}
        })
            const data = await response.json();
            return data;
        }catch(error){
            throw error;
        }
      }
  });

  // const data = useRecoilValue(fetchAlertnessDetails);
  // l('data is: ', data);

  return(
    <Center>
      <Text>Second </Text>
      <Button onPress={()=>{
        onPress();
        makeRequest();
      }}>GET</Button>
    {/*
      <React.Suspense fallback={<Text>Loading...</Text>}>
        <DetailsWithSuspense />
      </React.Suspense>
      */}
    </Center>
  )
}




