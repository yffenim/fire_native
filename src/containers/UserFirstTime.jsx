import React, { useState, useEffect } from 'react';
import { VStack, Text, ScrollView } from 'native-base';
import FirstTimeText from '../presentations/FirstTimeText';
import { SubmitTitlesButton } from "./SubmitButtons";
import TrackModelForm from './TrackModelForm';
// import AddTitleForm from './AddTitleForm';
import l from "../../helpers/consolelog.js";


export default function UserFirstTime({navigation}) {

  // setting local state for user input
  const [secondsTitle, setSecondsTitle] = useState("");
  const [thirdsTitle, setThirdsTitle] = useState("");
  // track which model per input
  const seconds = "seconds"
  const thirds = "thirds"

  return (
    <ScrollView>
      <FirstTimeText />
      <VStack space={3}
        alignItems="center"
        bg="darkBlue.900"
        borderRadius="10"
        p="5" pt="8" pb="8"
      >
        {/*<AddTitleForm />*/}
        <TrackModelForm
          model={seconds}
          setSecondsTitle={setSecondsTitle}
        />
        <TrackModelForm
          model={thirds}
          setThirdsTitle={setThirdsTitle}
        />
        <SubmitTitlesButton
          secondsTitle={secondsTitle}
          thirdsTitle={thirdsTitle}
          navigation={navigation}
        />
      </VStack>
    </ScrollView>  
  )
}
