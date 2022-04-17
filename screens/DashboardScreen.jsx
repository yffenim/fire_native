import React, { useRef, useState, useEffect } from "react";
import { VStack, Center, Text, Box, Button } from "native-base";
import l from "../helpers/consolelog.js";
import { getLoginName } from "../src/navigations/navParams.js";
import UserGreeting from '../src/components/UserGreeting'
import DisplayMoments from '../src/components/DisplayMoments'
import InputMoment from '../src/components/InputMoment'

// This Component contains:
// - API Get request + Moments State
// - buttonText state for when Edit is clicked
// - updateDisplay() that calls getApiCall and is passed to child via props for updating Moments Display List after Edit/Delete requests

export default function DashboardScreen( {route, navigation} ) {
  const name = getLoginName(route.params);
  const [moments, setMoments] = useState({});
  const [editMode, setEditMode] = useState(null);
  const [editId, setEditId] = useState(null);

  const momentsURL = "https://limitless-citadel-71686.herokuapp.com/api/alerts/"

// debugging why my setEditMode won't set mode to false
// this is working 
  const toggleTest = () => {
    setEditMode(!editMode);
    l(editMode);
  }


// Lift Edit Click to here
// trigger the change for the Input UI and API call 
  function changeInputMoment(id) {
    // l("changeInputMoment id: ", id);
    setEditMode(!editMode);
    setEditId(id);
    // this needs to be reset once the Edit has been Submitted
  }

  const getApiCall = () => {
    // l(setMoments); 
    l("making a GET request for Moments from top Level");
      fetch(momentsURL)
        .then(response => response.json())
			  .then(response => {
				  // l("the GET response is: ", response);
          setMoments(response);
        })
        .catch(err => { l("Get request for Moments error: ", err) }
     );
  }

// call upon page loading
  useEffect(() => {
    getApiCall();
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
        <Button onPress={toggleTest}>Test</Button>
        <UserGreeting name={name}/>
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
