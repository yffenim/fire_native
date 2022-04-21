import React, { useState, useEffect } from "react";
import { VStack, Center, Text, Box, Button } from "native-base";
import { getLoginName } from "../src/navigations/navParams.js";
import UserGreeting from '../src/components/UserGreeting';
import DisplayModel0 from '../src/components/DisplayModel0';
import DisplayModel1 from '../src/components/DisplayModel1';
import DisplayModel2 from '../src/components/DisplayModel2';
import InputMoment from '../src/components/InputMoment';
import { getRequest } from '../src/api/ApiRequests.jsx';
import l from "../helpers/consolelog.js";

// - Display Recent Tracked Moments + EDIT/DELETE
// - Option to Display Recent Tracked other_model + EDIT/DELETE
// - Search function + EDIT/DELETE

function DataScreen({navigation }) {
  const [moments, setMoments] = useState({});
  const [editMode, setEditMode] = useState(null);
  const [editId, setEditId] = useState(null);

// SAME REQUEST NO ASYNC/AWAIT -> does not work
  // because I'm calling the request function and saving
  // it before the promise is run through .then callback?
  const getApiCall = async () => {
    l("Sending a GET Request to server...");
    const data = await getRequest();
    setMoments(data);
  }

  useEffect(() => {
    getApiCall();
    // getCall();
    l("Moments has been updated: ", moments);
  }, []);



  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <DisplayModel0
        moments={moments} 
        updateDisplay={getApiCall}
      />
      <DisplayModel1 />
      <DisplayModel2 />
    </Center>
  );
}

export default DataScreen;
