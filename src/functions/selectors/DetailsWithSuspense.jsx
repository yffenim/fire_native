import React, { useState } from 'react';
import { selector, useRecoilValue } from 'recoil';
import { Text, Button } from 'native-base';
import l from '../../../helpers/consolelog';
import AsyncStorage from "@react-native-async-storage/async-storage";



const momentsURL = 'http://localhost:3000/api/alerts/';

// Selector that fetches data
const fetchAlertnessDetails = selector({
    key: 'userDetailsSelector',
    get: async ({ get }) => {
        try {
            const response = await fetch(momentsURL, {
                headers: headers
            });
            const data = await response.json();
            return data;
        }catch(error){
            throw error;
        }
    }
});

// subscribe to the selector 
// Data returned from Select is READ-ONLY
export const DetailsWithSuspense = () => {
// subscribing to the Selector
    const [headers, setHeaders] = useState({});

// getting headers
const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('requestHeaders')
      let value = jsonValue != null ? JSON.parse(jsonValue) : null;
      setHeaders(value)
      l("headers from MomentsApiRequests: ", setHeaders);
    } catch(e) {
      l("Error from MomentsApiRequests async retrieval: ", e);
   }
}

    // Selector that fetches data
    const fetchAlertnessDetails = selector({
        key: 'userDetailsSelector',
        get: async ({ get }) => {
            try {
                const response = await fetch(momentsURL, {
                    headers: headers
                });
                const data = await response.json();
                return data;
            }catch(error){
                throw error;
            }
        }
    });


    const userDetails = useRecoilValue(fetchAlertnessDetails);
    const data = userDetails;
    l("Subscribed data from Selector:  ", data);


    return (
    <Button onPress={()=>{getData()}}>GET</Button>
    );
}
