import React, { useState } from 'react';
import { Center,  Box } from "native-base";
import SwipeList from '../containers/SwipeList';
import { headersAtom } from '../atoms/headersAtom';
import { useRecoilValue, useRecoilRefresher_UNSTABLE, selector } from 'recoil';
import { baseURL } from '../functions/APIDevUrl';
import { LoadingSpinner } from '../presentations/LoadingSpinner'
import l from '../../helpers/consolelog';


// TOP LEVEL SCREEN FOR EDITING ALERT DATA
export default function AlertnessScreen({navigation}) {
  const [mode, setMode] = useState("Basic");
  const headers = useRecoilValue(headersAtom);
  const urlModel = "alerts/";
  const url = baseURL + urlModel;

  // get request w/ recoil selector
  const fetchMomentsData = selector({
    key: `MomentsDataSelector`,
    get: async ({ get }) => {
    try {
        const response = await fetch(url, {
            headers: headers
        });
        const data = await response.json();
        l("alertness successfully fetched or refreshed: ", data);
        return data;
    } catch(error) {
        throw error;
        }
    }
  });

  return ( 
    <Center>
      <Box flex="1" safeAreaTop maxW="400px" w="100%">
        <React.Suspense fallback={LoadingSpinner} >
          <SwipeList 
            navigation={navigation} 
            fetchMomentsData={fetchMomentsData}
            urlModel={urlModel}
          />
        </React.Suspense>
      </Box>
    </Center>
  )
}




