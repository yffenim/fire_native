import React, { useState, useEffect } from 'react';
import { VStack, Text, ScrollView } from 'native-base';
import FirstTimeText from '../presentations/FirstTimeText';
import { SubmitTitlesButton } from "./SubmitButtons";
import TrackModelForm from './TrackModelForm';
import AddTitleForm from './AddTitleForm';
import l from "../../helpers/consolelog.js";


export default function UserFirstTime({secondsTitle, thirdsTitle, setLevel, level, setSecondsTitle, setThirdsTitle, firstTime, setFirstTime, navigation}) {
  
  const [input, clearInput] = useState('');
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
          setLevel={setLevel} level={level}
          model={seconds}
          input={input}
          setSecondsTitle={setSecondsTitle}
        />
        <TrackModelForm
          setLevel={setLevel} level={level}
          model={thirds}
          input={input}
          setThirdsTitle={setThirdsTitle}
        />
        <SubmitTitlesButton
          clearInput={clearInput}
          firstTime={firstTime}
          setFirstTime={setFirstTime}
          level={level}
          secondsTitle={secondsTitle}
          thirdsTitle={thirdsTitle}
          navigation={navigation}
        />
      </VStack>
    </ScrollView>  
  )
}
