import React, { useState, useEffect } from "react";
import { VStack, Center, Text, Box, Button } from "native-base";
import DisplayModel0 from '../src/components/DisplayModel0';
import * as Linking from 'expo-linking';
import { getRequest, getAuthenticatedRequest } from '../src/api/ApiRequests.jsx';
import l from "../helpers/consolelog.js";


function DataScreen({navigation }) {
  const [moments, setMoments] = useState({});

  const getApiCall = async () => {
    l("Sending a GET Request to server...");
    const data = await getRequest();
    setMoments(data);
  }

  useEffect(() => {
    getApiCall();
    l("Moments has been updated.");
  }, []);



  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <Text onPress={()=>testLink()}>Link</Text>
      <DisplayModel0
        moments={moments}
        updateDisplay={getApiCall}
      />
    </Center>
  );
}

export default DataScreen;
