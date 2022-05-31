import React from 'react';
import { selector, atom } from 'recoil';
import l from '../../helpers/consolelog';
import DataFlatList from '../containers/DataFlatList';
// import { modelsAtom } from '../atoms/modelsAtom';

// Functions depending on which API endpoint we're calling



// API endpoints for data
const momentsURL = 'http://localhost:3000/api/alerts';
const secondsURL = 'http://localhost:3000/api/seconds';
const thirdsURL = 'http://localhost:3000/api/thirds';


// GET request for Alertness as SELECTOR
 export const fetchMomentsData = selector({
    key: `MomentsDataSelector`,
    get: async ({ get }) => {
    try {
        const response = await fetch(momentsURL);
        const data = await response.json();
        l("alertness successfully fetched");
        // l("alertness fetched: ", data);
        return data;
    } catch(error) {
        throw error;
        }
    }
});

// GET for second model
 export const fetchSecondsData = selector({
    key: `SecondsDataSelector`,
    get: async ({ get }) => {
    try {
        const response = await fetch(secondsURL);
        const data = await response.json();
        l("seconds fetched: ", data);
        return data;
    } catch(error) {
        throw error;
        }
    }
});


// GET for third model
 export const fetchThirdsData = selector({
    key: `ThirdsDataSelector`,
    get: async ({ get }) => {
    try {
        const response = await fetch(thirdsURL);
        const data = await response.json();
        l("thirds fetched: ", data);
        return data;
    } catch(error) {
        throw error;
        }
    }
});








// OLD: Tried to make TRY by using a toggle Atom but could not get
// the Atom to set properly in TabView of the Alerts
// Try this again
// export const fetchSecondsData = selector({
//     key: `SecondsDataSelector`,
//     get: async ({ get }) => {
//     var url = ""
//     const toggle = get(modelsAtom);
//     l("the current model toggle is: ", toggle);
//     switch (toggle) {
//       case 'seconds':
//         url = secondsURL;
//         break;
//       case 'thirds':
//         url = thirdsURL;
//         break;
//       default:
//         url = momentsURL;
//       }

//     try {
//         const response = await fetch(url);
//         const data = await response.json();
//         return data;
//     } catch(error) {
//         throw error;
//         }

//     }
// });

