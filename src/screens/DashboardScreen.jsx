import React, { useRef, useState, useEffect } from "react";
import { VStack, Center, Text, Box, Button } from "native-base";
import l from "../helpers/consolelog.js";
// import { getLoginName } from "../src/navigations/navParams.js";
import UserGreeting from '../src/components/UserGreeting';
import DisplayMoments from '../src/components/DisplayMoments';
import InputMoment from '../src/components/InputMoment';
import { getRequest } from '../src/api/ApiRequests.jsx';

// This Component contains:
// - API Get request + Moments State
// - buttonText state for when Edit is clicked
// - updateDisplay() that calls getApiCall and is passed to child via props for updating Moments Display List after Edit/Delete requests

// ISSUE: setEditMode won't set mode to false
  
export default function DashboardScreen( {route, navigation} ) {
  // const name = getLoginName(route.params);
  const [moments, setMoments] = useState({});
  const [editMode, setEditMode] = useState(null);
  const [editId, setEditId] = useState(null);

  const momentsURL = "https://limitless-citadel-71686.herokuapp.com/api/alerts/"

// debugging setEditMode: this toggle is working
// const toggleTest = () => {
  //   setEditMode(!editMode);
  //   l(editMode);
  // }

// Lift Edit Click to here
// Set editMode to true to trigger the change for the Input UI and Patch Request 
// Set editMode to false:
// - once edit is submitted
// - from clicking anywhere else on screen
// - clicking nevermind to get out of Edit mode
  function changeInputMoment(id) {
    setEditMode(!editMode);
    setEditId(id);
}

// API GET REQUEST WITH ASYNC() and AWAIT()
  const getApiCall = async () => {
    l("Sending a GET Request to server...");
    const data = await getRequest();
    // l("getApiCall data using async/await: ", data); // returns array as expected
    setMoments(data);
  }

// SAME REQUEST NO ASYNC/AWAIT -> does not work
// because I'm calling the request function and saving
// it before the promise is run through .then callback?
  const getCall = () => {
    l("Sending a GET Request to server...");
    const data = getRequest();
    l("getCall data without async/await: ", data); // returns promise object 
    setMoments(data);
  }



// make API GET REQUEST upon page loading
  useEffect(() => {
    getApiCall();
    // getCall();
    l("Moments has been updated: ", moments);
  }, []);


  return (
    <Box
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
      h="10"
    >
      <VStack space={4}>
        {/* <Button onPress={toggleTest}>Test</Button>
        <UserGreeting name={name}/>
        */}
        <InputMoment 
          updateDisplay={getApiCall} 
          editMode={editMode}
          editId={editId} 
        />
        <DisplayMoments 
          moments={moments} 
          changeInputMoment={changeInputMoment}
          updateDisplay={getApiCall}
          editMode={editMode}
          setEditMode={setEditMode}
        />
      </VStack>
		</Box>
  )
}
