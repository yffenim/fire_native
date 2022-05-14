import React, { useState }  from 'react';
import { Center, Text, Box, Heading } from "native-base";
import { SwipeListView } from 'react-native-swipe-list-view';
import SwipeListThirds from '../containers/SwipeListThirds';
import { atom, selector, useRecoilState, useRecoilValue, useRecoilRefresher_UNSTABLE } from 'recoil';
import API from '../functions/API';
import l from '../../helpers/consolelog';
// import { modelsAtom } from '../atoms/modelsAtom';



export default function ThirdsScreen({navigation}) {
  const [mode, setMode] = useState("Basic");

  return ( 
    <Center>
      <Box flex="1" safeAreaTop 
        maxW="400px" w="100%"
    >
      <React.Suspense fallback={<Text>Loading...</Text>}>
        <SwipeListThirds navigation={navigation} />
      </React.Suspense>
      </Box>
    </Center>
  )
}


