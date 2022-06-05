import React, { useState, useEffect } from 'react';
import { VStack, Text, ScrollView, useToast } from 'native-base';
import { ToastBox } from '../presentations/ToastBox';
import FirstTimeText from '../presentations/FirstTimeText';
import TitlesForm from './TitlesForm';
import l from "../../helpers/consolelog.js";


export default function UserFirstTime({setSignedIn}) {
  const first = "first";

return (
    <ScrollView>
      <FirstTimeText />
      <VStack 
        space={3}
        alignItems="center"
        bg="darkBlue.900"
        borderRadius="10"
        p="5" pt="8" pb="8"
      >
        <TitlesForm 
          first={first}
          setSignedIn={setSignedIn} 
        />
      </VStack>
    </ScrollView>  
  )
}


