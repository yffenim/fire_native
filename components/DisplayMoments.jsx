import React, { useState, useEffect } from 'react';
import {
  Heading,
  Pressable,
  Box,
} from "native-base";
// import child component
import DisplayMomentsList from './DisplayMomentsList';

const l = (arg) => console.log(arg);
const baseURL = "https://limitless-citadel-71686.herokuapp.com/api/alerts/"
// const baseURL = 'http://localhost:3000/api/alerts/';


// Display Recent 5 Tracked Moments
export default function DisplayMoments() {
  const [moments, setMoments] = useState({});

  const getApiCall = () => {
    l("fetching");
    fetch(baseURL)
      .then(response => response.json())
      .then(response => {
        setMoments(response)
      })
      .catch(err => { l(err) }
    );
  }

// update when state changes:
useEffect(() => {
  l("Display Moments State changed and rendering - components/DisplayMoments");
  }, [moments]
)

  const listData = moments[0]

  return (
    <Box>
      <Pressable onPress={getApiCall} >
        <Heading fontSize="xl">View Recent Moments</Heading>
      </Pressable>
      <DisplayMomentsList data={listData} />
    </Box>
  )}

