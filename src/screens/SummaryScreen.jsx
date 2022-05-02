import React, { useState, useEffect } from "react";
import { VStack, Center, Text, Box, Button } from "native-base";
import DisplayButtons from '../containers/DisplayButtons';
import DisplayMomentsList from '../containers/DisplayMomentsList';
import HideDisplayButton from '../containers/HideDisplayButton';
import DisplaySecondsList from '../containers/DisplaySecondsList';
import { getRequest, getAuthenticatedRequest } from '../functions/MomentsApiRequests.jsx';
import {CSVLink, CSVDownload} from 'react-csv';
import l from "../../helpers/consolelog.js";
import AsyncStorage from "@react-native-async-storage/async-storage";


// This Screen contains:
// display recently created data
// EDIT/DELETE recently created data
// chart model data

// TODO:
// 5. render Flatlist for Thirds
// 7. Edit/Delete

export default function SummaryScreen({ navigation }) {

  const [moments, setMoments] = useState({});
  const [seconds, setSeconds] = useState({});
  const [thirds, setThirds] = useState({});
  // const [secondsTitle, setSecondsTitle ] = useState("");
  // const [thirdsTitle, setThirdsTitle ] = useState("");
  const secondsTitle = "appetite"
  const thirdsTitle = ""
  const [showMoments, setShowMoments] = useState(false);
  const [showSeconds, setShowSeconds] = useState(false);
  const [showThirds, setShowThirds] = useState(false);

  // retrieve the header data from storage
  var setHeaders = null;

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('requestHeaders')
      setHeaders = jsonValue != null ? JSON.parse(jsonValue) : null;
      // l("headers from MomentsApiRequests: ", setHeaders);
    } catch(e) {
      l("Error from MomentsApiRequests async retrieval: ", e);
   }
  }

  const onPressCall = () => {
    getData(); // getting headers
    getApiCall();
  }

// request for all model data
  const getApiCall = async () => {
    l("Sending a unauthenticated GET Request to server...");
    const data = await getRequest();
    // const data = await getAuthenticatedRequest(setHeaders);
    l("Return data from SummaryScreen: ", data);
    setMoments(data[0]);
    setSeconds(data[2]);
    setThirds(data[5]);
    setSecondsTitle(data[2][0].title_for_seconds);
    setThirdsTitle(data[4][0].title_for_thirds);
  } 

  // useEffect(()=> {
  //   l("moments have been updated");
  //   l("time: ", moments);
  // }, [moments]);

  return (
    <Center>
      <Button onPress={()=>{onPressCall()}}>Call</Button>
      {!showMoments &&
        <DisplayButtons
          setShowMoments={setShowMoments}
          setShowSeconds={setShowSeconds}
          setShowThirds={setShowThirds}
          onPressCall={onPressCall}
        />
      }
      {showMoments &&
        <Box>
          <HideDisplayButton 
            setShowMoments={setShowMoments}
            setShowSeconds={setShowSeconds}
            setShowThirds={setShowThirds}
          />
          <DisplayMomentsList 
            data={moments} onPressCall={onPressCall}
          />
        </Box>
      }
      {showSeconds &&
        <Box>
          <DisplaySecondsList 
            data={seconds} onPressCall={onPressCall}
          />
          <Box h="100">
            <HideDisplayButton
              setShowMoments={setShowMoments}
              setShowSeconds={setShowSeconds}
              setShowThirds={setShowThirds}
            />
          </Box>
        </Box>
      }

    </Center>
  );
}


// or
// Have three display lists
// render which ever one depending on click
// thi means still have to pass up click
// might as well do first one

