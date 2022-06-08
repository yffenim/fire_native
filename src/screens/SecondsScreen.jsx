import React, { useState }  from 'react';
import { Center, Box } from "native-base";
import SwipeListSeconds from '../containers/SwipeListSeconds';
import { LoadingSpinner } from '../presentations/LoadingSpinner'
import { headersAtom } from '../atoms/headersAtom';
import { useRecoilValue, useRecoilRefresher_UNSTABLE, selector } from 'recoil';
import { baseURL } from '../functions/APIDevUrl';
// import { baseURL } from '../functions/APIProdUrl';
import l from '../../helpers/consolelog';

// SAME AS ALERTNESS SCREEN
export default function SecondsScreen({navigation}) {
  const [mode, setMode] = useState("Basic");
  const headers = useRecoilValue(headersAtom);
  const urlModel = "seconds/";
  const url = baseURL + urlModel;

  // get request w/ recoil selector
  const fetchSecondsData = selector({
    key: `SecondsDataSelector`,
    get: async ({ get }) => {
    try {
        const response = await fetch(url, {
            headers: headers
        });
        const data = await response.json();
        l("seconds  successfully fetched or refreshed: ", data);;
        return data;
    } catch(error) {
        throw error;
        }
    }
  });

  return ( 
    <Center>
      <Box flex="1" safeAreaTop 
        maxW="400px" w="100%" 
      >
        <React.Suspense fallback={LoadingSpinner}>
          <SwipeListSeconds 
            navigation={navigation} 
            fetchSecondsData={fetchSecondsData}
            urlModel={urlModel}
          />
        </React.Suspense>
      </Box>
    </Center>
  )
};
