import React, { useRef, useState, useEffect } from "react";
import { Center, ScrollView, Button, Box } from "native-base";
import ModelTitle from "../presentations/ModelTitle";
// import SummaryScreen from "./SummaryScreen";
import AddData from "../containers/AddData";
import l from "../../helpers/consolelog.js";
import { getRequest } from '../functions/MomentsApiRequests.jsx';

// This is the Parent for All Model Data
// make api call and set state for everything here
// ok apparently i will not be 

// ok new plan:
// If I need to make all these calls in the SummaryScreen, let's dry up here
// so: what do we need?
// - count 
// - title 

export default function AddDataScreen({ navigation }) {
  const [level, setLevel] = useState(null);
  const [secondsTitle, setSecondsTitle ] = useState("");
  const [showSeconds, setShowSeconds] = useState(false)
  const [thirdsTitle, setThirdsTitle ] = useState("");
  const [showThirds, setShowThirds] = useState(false)
  const defaultTitle = "alertness";

// render if second/third models exist
  const conditionalRenderSeconds = () => {
    setShowSeconds(true);
  }

  const conditionalRenderThirds = () => {
    setShowThirds(true);
  }

// request for all user models
  const getApiCall = async () => {
    l("Sending a GET Request to server...");
    const data = await getRequest();
    // l("Return data from AddDataScreen: ", data[2][0]);
    let secondsCount = data[3].count;
    let thirdsCount = data[5].count;
    setSecondsTitle(data[2][0].title_for_seconds);
    setThirdsTitle(data[4][0].title_for_thirds);

    if (secondsCount > 0) {
      conditionalRenderSeconds();
    };
    if (thirdsCount > 0) {
      conditionalRenderThirds();
    };
  }

// on page load
  useEffect(() => {
    getApiCall();
    l("All Data has been updated.");
  }, []);


  useEffect(() => {
    l("New Level State from AddDataScr: ", level);
  }, [level]);

  return (
    <Center>
      <ScrollView>
        <ModelTitle title={defaultTitle} level={level} />
        <AddData model={defaultTitle} setLevel={setLevel} level={level} /> 
        {showSeconds &&
          <Box>
            <ModelTitle title={secondsTitle} level={level} />
            <AddData model="second" setLevel={setLevel} level={level} />
         </Box>
        }
        {showThirds &&
          <Box>
            <ModelTitle title={thirdsTitle} level={level} />
            <AddData model="third" setLevel={setLevel} level={level} />
          </Box>
        }

      </ScrollView>
    </Center>
  );
}



