import React, { useState, useEffect } from "react";
import { VStack, Center, Text, Box, Button } from "native-base";
import DisplayButtons from '../containers/DisplayButtons';
import DisplayMomentsList from '../containers/DisplayMomentsList';
// import DisplaySeconds from '../containers/DisplaySectionList';
import { getRequest, getAuthenticatedRequest } from '../functions/MomentsApiRequests.jsx';
import l from "../../helpers/consolelog.js";

// This Screen contains:
// display recently created data
// EDIT/DELETE recently created data
// chart model data

// TODO:
// 4. render Flatlist for Seconds
// 5. render Flatlist for Thirds
// 6. Add visible toggle for all 
// 7. Edit/Delete
// 8. export CSV then DONE

export default function SummaryScreen({ navigation }) {

  const [moments, setMoments] = useState({});
  const [seconds, setSeconds] = useState({});
  const [thirds, setThirds] = useState({});
  const [showMoments, setShowMoments] = useState(false);
  const [showSecond, setShowSeconds] = useState(false);
  const [showThirds, setShowThirds] = useState(false);


// request for all user models
  const getApiCall = async () => {
    l("Sending a GET Request to server...");
    const data = await getRequest();
    l("Return data from SummaryScreen: ", data);
    setMoments(data[0]);
    setSeconds(data[2]);
    setThirds(data[5]);
  }
  
  const onPressCall = () => {
    getApiCall();
  }

  // l("moments: ", moments);


  return (
    <Center>
      <DisplayButtons
        moments={moments} 
        setShowMoments={setShowMoments}
        onPressCall={onPressCall} 
      />
      {showMoments &&
        <DisplayMomentsList
          data={moments}
        />}
    </Center>
  );
}

