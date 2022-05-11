import React, { useState }  from 'react';
import { Center, Text, Box, Heading } from "native-base";
import { SwipeListView } from 'react-native-swipe-list-view';
import SwipeList from '../containers/SwipeList';
import { atom, selector, useRecoilState, useRecoilValue, useRecoilRefresher_UNSTABLE } from 'recoil';
import API from '../functions/API';
import l from '../../helpers/consolelog';
// import { modelsAtom } from '../atoms/modelsAtom';



// On Each DataScreen:
// Display Total & Average
// Display latest 20 entries
// Edit/Delete + timer for Undo Delete

// SwipeList component needs:
// data from api
// Do I want to save it in state

export default function ThirdsScreen() {
  const [mode, setMode] = useState("Basic");

  return ( 
    <Center>
      <Box flex="1" safeAreaTop 
        maxW="400px" w="100%"
    >

        <Heading size="md" color="coolGray.200">
          ADD MODEL STATS
          ADD LAST UPDATED OF THIS LIST
        </Heading>

        <React.Suspense fallback={<Text>Loading...</Text>}>
          <SwipeList />
        </React.Suspense>
      
      </Box>
    </Center>
  )
}


