import React, { useState }  from 'react';
import { Center, Box } from "native-base";
import SwipeListThirds from '../containers/SwipeListThirds';
import { LoadingSpinner } from '../presentations/LoadingSpinner';
import { headersAtom } from '../atoms/headersAtom';
import { useRecoilValue, useRecoilRefresher_UNSTABLE, selector } from 'recoil';
import { baseURL } from '../functions/APIDevUrl';
// import { baseURL } from '../functions/APIProdUrl';
import l from '../../helpers/consolelog';

// SAME AS ALERTNESS SCREEN
export default function ThirdsScreen({navigation}) {
  const [mode, setMode] = useState("Basic");
  const headers = useRecoilValue(headersAtom);
  const urlModel = "thirds/";
  const url = baseURL + urlModel;

  // get request w/ recoil selector
  const fetchThirdsData = selector({
    key: `ThirdsDataSelector`,
    get: async ({ get }) => {
    try {
        const response = await fetch(url, {
            headers: headers
        });
        const data = await response.json();
        l("thirds successfully fetched or refreshed: ", data);;
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
          <SwipeListThirds 
            navigation={navigation} 
            fetchThirdsData={fetchThirdsData}
            urlModel={urlModel}
          />
        </React.Suspense>
      </Box>
    </Center>
  )
};
