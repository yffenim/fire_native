import React, { useState, useEffect } from "react";
import { VStack, Center, Text, Box, Button } from "native-base";
import DisplayMoments from '../containers/DisplayMoments';
import { getRequest, getAuthenticatedRequest } from '../functions/ApiRequests.jsx';
import l from "../../helpers/consolelog.js";

// display recently created data + EDIT/DELETE
// chart model data

export default function SummaryScreen({ navigation }) {
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
      <DisplayMoments
        moments={moments}
        updateDisplay={getApiCall}
      />
    </Center>
  );
}

