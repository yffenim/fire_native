import React, { useState, useEffect } from 'react';
import {
  Heading,
  Pressable,
  Box,
  Text
} from "native-base";
import { useImperativeHandle, forwardRef } from 'react'
// import child component
import DisplayMomentsList from './DisplayMomentsList';

const l = (arg) => console.log(arg);
const baseURL = "https://limitless-citadel-71686.herokuapp.com/api/alerts/"
// const baseURL = 'http://localhost:3000/api/alerts/';

// Display Recent 5 Tracked Moments
export default function DisplayMoments() {
  const [moments, setMoments] = useState({});

// in order to make child function accessible to parent
  // useImperativeHandle(ref, () => ({
  // // this method is now connnected to ref
  //   getApiCall: () => { getApiCall() }
  // }))


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
  l("State has changed!");
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



// const Test = (props, ref) => {
//   useImperativeHandle(ref, () => ({
//     // methods connected to `ref`
//     sayHi: () => { sayHi() }
//   }))
//   // internal method
//   const sayHi = () => {
//     console.log("Hello")
//   }
//   return (
//     <Text>Hello from child Ref!</Text>
//   );
// }

// export default forwardRef(Test);

