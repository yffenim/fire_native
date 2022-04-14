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

const l = (arg) => console.log(arg);
const url = "https://limitless-citadel-71686.herokuapp.com/api/alerts/"
// const url = 'http://localhost:3000/api/alerts/';

// const fetchMoments = () => {
// 	const [moments, setMoments] = setState({});

// 	const loadMoments = async () => {
// 		const res = await fetch(url);
// 		setMoments(await res.json());
// 	};
// }

// const listMoments = (moments) => {
//   const [

// function hello(name) {
//   return <Text>Hi {name} from imported </Text>;
// }


function SubmitMoment() {
  return (
			<Text>
				Submit Moment
		</Text>
  )
}

export default SubmitMoment;
