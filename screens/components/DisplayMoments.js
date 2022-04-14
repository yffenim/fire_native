import React, { useState, useEffect } from 'react';
import {
  VStack,
  HStack,
  Center,
  Text,
  Box,
  Button,
  Heading,
  FormControl,
  Input,
  Link,
  FlatList,
  Spacer,
  Pressable,
  SectionList,
  AlertDialog,
  Modal,
} from "native-base";
import DisplayMomentsList from './DisplayMomentsList';
import Testing from './Testing';

const l = (arg) => console.log(arg);
// const baseURL = "https://api.agify.io/?name=effy"
const baseURL = "https://limitless-citadel-71686.herokuapp.com/api/alerts/"
// const baseURL = 'http://localhost:3000/api/alerts/';


// Display Recent 5 Tracked Moments
function DisplayMoments() {
  const [moments, setMoments] = useState({});

  const fetchApiCall = () => {
    l("fetching");
    fetch(baseURL)
      .then(response => response.json())
      .then(response => {
        setMoments(response)
      })
      .catch(err => { l(err) }
    );
  }
  
// check if moments state has been updated
// useEffect(() => {
  //   l(moments[0]);
  // }, [moments]
// )

  const listData = moments[0]

  return (
    <Box>
      <Pressable onPress={fetchApiCall} >
        <Heading fontSize="xl">View Recent Moments</Heading>
      </Pressable>
      <DisplayMomentsList data={listData} />
    </Box>
  )}

export default DisplayMoments;
