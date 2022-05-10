import React, { useState, useEffect } from 'react';
import { VStack, Center, Text, Box, Button, Dimensions, useColorModeValue, Pressable} from "native-base";
import { SceneMap } from 'react-native-tab-view';
import DisplayButtons from '../containers/DisplayButtons';
import DisplayMomentsList from '../containers/DisplayMomentsList';
import HideDisplayButton from '../containers/HideDisplayButton';
import { getRequest, getAuthenticatedRequest } from '../functions/MomentsApiRequests.jsx';
import l from "../../helpers/consolelog.js";
import AsyncStorage from "@react-native-async-storage/async-storage";


// figure abstract the getData function

// GET / EDIT / DELETE for Alerts
export default function TabRouteFirst() {
  const [moments, setMoments] = useState({});
  const [showMoments, setShowMoments] = useState(false);

  const [headers, setHeaders] = useState({});

// setting headers - should this be moved to the async requests page 
// because i've turned on security feature of having a new header request
// every turn
  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('requestHeaders')
      let value = jsonValue != null ? JSON.parse(jsonValue) : null;
      setHeaders(value)
      // l("headers from MomentsApiRequests: ", setHeaders);
    } catch(e) {
      l("Error from MomentsApiRequests async retrieval: ", e);
   }
  }

  const getApiCall = async () => {
    const data = await getAuthenticatedRequest(headers);
    // l("Returning data for Alerts GET: ", data) 
    l("making getApiCall from RouteFirst");
    setMoments(data);
  }

// call when page loads
  useEffect(() => {
    // l("useEffect used");
    // let mounted = true;
    getData(); //headers
    getApiCall();
  }, []);


return (
  <Center flex={1}>
    {/*
    <Button onPress={()=>{onPressCall()}}>Show List</Button>
    */}
    <DisplayMomentsList data={moments} refresh={getApiCall} />
  </Center> 
  )
};





