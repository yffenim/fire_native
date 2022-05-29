import React from 'react';
import { VStack, Text, ScrollView } from 'native-base';
import FirstTimeText from '../presentations/FirstTimeText';
import { SubmitTitles } from "./SubmitButtons";
import TrackModelForm from './TrackModelForm';
import l from "../../helpers/consolelog.js";


export default function UserFirstTime({secondsTitle, thirdsTitle, setLevel, level, setSecondsTitle, setThirdsTitle, firstTime, setFirstTime, navigation}) {
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
        <TrackModelForm
          setLevel={setLevel} level={level}
          model={seconds}
          setSecondsTitle={setSecondsTitle}
        />
        <TrackModelForm
          setLevel={setLevel} level={level}
          model={thirds}
          setThirdsTitle={setThirdsTitle}
        />
        <SubmitTitles
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
