import React, { useState, useEffect } from 'react';
import {
  Heading,
  Pressable,
  Box,
} from "native-base";
// import children
import DisplayMomentsList from './DisplayMomentsList';
import UpdateMomentsList from '../containers/UpdateMomentsList';
// import { getApiCall, returnedGetApi } from "../api/MomentsApi";
// import helpers
import l from '../../helpers/consolelog';
const momentsURL = "https://limitless-citadel-71686.herokuapp.com/api/alerts/"

export default function DisplayMoments() {
  const [moments, setMoments] = useState({});

// Load Moments Data needed for child components here
// I want to remove this getApiCall function into a separate file
// but I am having trouble setting the state from there
// question is: how to set state from a function 
  const getApiCall = () => {
    l(setMoments); 
    l("making a GET request for Moments");
      fetch(momentsURL)
        .then(response => response.json())
			  .then(response => {
				  l("the GET response is: ", response);
          setMoments(response);
        })
        .catch(err => { l("Get request for Moments error: ", err) }
     );
  }

// empty array as second arg means first arg is called once upon page load
  useEffect(() => {
    getApiCall();
  }, []);

  // notification of state change:
  // useEffect(() => {
  //   l("Display Moments State changed and rendering - components/DisplayMoments");
  //  }, [moments]
  // )

  const listData = moments[0]

  return (
    <Box>
      <UpdateMomentsList />
      <DisplayMomentsList data={listData} />
    </Box>
  )}

