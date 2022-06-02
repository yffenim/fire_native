import React, { useState }  from 'react';
import { Center, Text, Box, Heading } from "native-base";
import { SwipeListView } from 'react-native-swipe-list-view';
import SwipeListSeconds from '../containers/SwipeListSeconds';
import { atom, selector, useRecoilState, useRecoilValue, useRecoilRefresher_UNSTABLE } from 'recoil';
import { loadingText } from "../presentations/loadingFallback";
import { LoadingSpinner } from '../presentations/LoadingSpinner'
import API from '../functions/API';
import l from '../../helpers/consolelog';
// import { modelsAtom } from '../atoms/modelsAtom';


export default function SecondsScreen({navigation}) {
  const [mode, setMode] = useState("Basic");

  return ( 
    <Center>
      <Box flex="1" safeAreaTop 
        maxW="400px" w="100%" 
      >
        <React.Suspense fallback={LoadingSpinner}>
          <SwipeListSeconds navigation={navigation} />
        </React.Suspense>
      </Box>
    </Center>
  )
};
