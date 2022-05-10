import React, { useState, useEffect } from "react";
import { VStack, Center, Text, Box, Button } from "native-base";
// import DisplayButtons from '../containers/DisplayButtons';
// import DisplayMomentsList from '../containers/DisplayMomentsList';
// import HideDisplayButton from '../containers/HideDisplayButton';
// import DisplaySecondsList from '../containers/DisplaySecondsList';
import { getRequest, getAuthenticatedRequest } from '../functions/MomentsApiRequests.jsx';
import l from "../../helpers/consolelog.js";
import { getString } from "../functions/getStorageData.jsx"

// This Screen contains:
// display recently created data
// EDIT/DELETE recently created data
// chart model data

export default function ExportScreen({ navigation }) {

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

