import React, { useState, useEffect }  from 'react';
import { Center, Text, Box, Heading, Button } from "native-base";
import { SwipeListView } from 'react-native-swipe-list-view';
import SwipeList from '../containers/SwipeList';
import ModelStats from '../containers/ModelStats';
import { atom, selector, useRecoilState, useRecoilValue, useRecoilRefresher_UNSTABLE } from 'recoil';
import API from '../functions/API';
// import { fetchData } from '../functions/fetchModelData';
import { fetchMomentsData } from '../functions/fetchModelSelector';
// import { modelsAtom } from '../atoms/modelsAtom';
import { momentsAtom } from '../atoms/momentsAtom';
import { loadingText } from "../presentations/loadingFallback";
import l from '../../helpers/consolelog';


// Setting all State needed for Alertness components

export default function AlertnessScreen() {
  const [mode, setMode] = useState("Basic");
  // const [moments, setMoments] = useRecoilState(momentsAtom);
  const [avg, setAvg] = useState(null);
  const [count, setCount] = useState(null);
  
  return ( 
    <Center>
      <Box flex="1" safeAreaTop 
        maxW="400px" w="100%"
      >

        <React.Suspense fallback={loadingText}>
          <SwipeList setAvg={setAvg} setCount={setCount}/>
        </React.Suspense>
      
      </Box>
    </Center>
  )
}

{/*

          <ModelStats avg={avg} count={count}/>
*/}


