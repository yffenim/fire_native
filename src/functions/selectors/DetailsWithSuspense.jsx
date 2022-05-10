import React from 'react';
import { selector, useRecoilValue } from 'recoil';
import { Text } from 'native-base';
import l from '../../../helpers/consolelog';

// makeing erquests
// const url ="https://catfact.ninja/fact"
const momentsURL = 'http://localhost:3000/api/alerts/';

// Selector that fetches data
const fetchAlertnessDetails = selector({
    key: 'userDetailsSelector',
    get: async ({ get }) => {
        try {
            const response = await fetch(momentsURL);



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
    const userDetails = useRecoilValue(fetchAlertnessDetails);
    const data = userDetails;
    l("Subscribed data from Selector:  ", data);
    return (  
      <Text>Level:  </Text>
    );
}
