import React, { useState, useEffect }  from 'react';
import { Center, Text, Box } from "native-base";
import { SwipeListView } from 'react-native-swipe-list-view';
import SwipeList from '../containers/SwipeList';
import API from '../functions/API';
import { fetchMomentsData } from '../functions/fetchModelSelector';
import { LoadingSpinner } from '../presentations/LoadingSpinner'
import l from '../../helpers/consolelog';


// Setting all State needed for Alertness components
export default function AlertnessScreen({navigation}) {
  const [mode, setMode] = useState("Basic");

  return ( 
    <Center>
      <Box flex="1" safeAreaTop 
        maxW="400px" w="100%" 
      >
        <React.Suspense fallback={LoadingSpinner} >
          <SwipeList navigation={navigation} />
        </React.Suspense>
      </Box>
    </Center>
  )
}




