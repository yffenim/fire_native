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
  const [moments, setMoments] = useRecoilState(momentsAtom);
  const [avg, setAvg] = useState(null);
  const [count, setCount] = useState(null);
  const [listData, setListData] = useState(null);
  const refresh = useRecoilRefresher_UNSTABLE; // why did this work in how I created FlatList but not in how I'm creating SwipeList?

  const api = new API;
  const url = "http://localhost:3000/api/alerts";
  var stats = moments[0];

  function fetchData() {
    api.get(url)
      .then(response => {
        setMoments(response);
        setCount(response[0]["count"]);
        setAvg(response[0]["average"]);
        setListData(response[1]);
    })
    .catch(error => {console.error(error)
    })
  };

  useEffect(()=>{
    fetchData(url);
  },[]);
  
  
  return ( 
    <Center>
      <Box flex="1" safeAreaTop 
        maxW="400px" w="100%"
      >
          <ModelStats avg={avg} count={count}/>

        <React.Suspense fallback={loadingText}>
          <SwipeList listData={listData} refresh={fetchData}/>
        </React.Suspense>
      
      </Box>
    </Center>
  )
}


