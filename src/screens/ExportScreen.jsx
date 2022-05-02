import React, { useState, useEffect } from "react";
import { VStack, Center, Text, Box, Button } from "native-base";
import DisplayButtons from '../containers/DisplayButtons';
import DisplayMomentsList from '../containers/DisplayMomentsList';
import HideDisplayButton from '../containers/HideDisplayButton';
import DisplaySecondsList from '../containers/DisplaySecondsList';
import { getRequest, getAuthenticatedRequest } from '../functions/MomentsApiRequests.jsx';
import l from "../../helpers/consolelog.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getString } from "../functions/getStorageData.jsx"

// This Screen contains:
// display recently created data
// EDIT/DELETE recently created data
// chart model data

export default function ExportScreen({ navigation }) {
  const [moments, setMoments] = useState({});
  const [headers, setHeaders] = useState({});

// get the request headers and pass them into the request call
  const onPressCall = () => {
    getHeaders("requestHeaders");
    getApiCall();
    // getAuthenticatedRequest(headers);
  }

  const getApiCall = async () => {
    // l("Sending a GET Request to server...");
    // const data = await getRequest();
    const data = await getAuthenticatedRequest(headers);
    l("Return data from ExportScreen: ", data);
  }

// getting authenticated request header
  const getHeaders = async (key='requestHeaders') => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
        if(jsonValue !== null) {
        let value = JSON.parse(jsonValue)
        // l("Headers from ExportScreen: ", value);
        setHeaders(value);
      }
      } catch(e) {
        l("error with async storage: ", e);
    }
  };

// let me know when headers are updated
  useEffect(() => {
    l("headers has been updated: ",headers);
  }, [headers]);

  return (
    <Center>
      <Text>EXPORT SCREEN</Text>
      <Button onPress={()=>{onPressCall()}}>CALL API</Button>
    </Center>
  );
}

// or
// Have three display lists
// render which ever one depending on click
// thi means still have to pass up click
// might as well do first one

