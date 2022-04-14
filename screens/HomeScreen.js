import React, { useState, useEffect } from "react";
// import { Text } from "native-base";
import { StyleSheet, Text, View, Button } from 'react-native';


const l = (arg) => console.log(arg);
// const url = 'https://limitless-citadel-71686.herokuapp.com/api/users/1';

// export default function greeting() {
// 	return <Text>Hello</Text>
// }

// export function getUser() {
//   return fetch(url)
//     .then(response => response.json())
// }

export default function HomeScreen() {
  // const [user, setUser] = React.useState([]);

  // const handleUserResults = () => {
  //   getUser().then(response => { setUser(response); 
  //   l(response);
  //   });
  // }

// useEffect(() => {
// 	handleUserResults();
// 	}, []);

const [data, setData] = useState({});
  const loadData = async () => {
    const res = await fetch("https://api.agify.io/?name=effy");
    setData(await res.json());
  };  useEffect(() => {
    loadData();
    return () => {};
  }, []);

  return (
    <View>
      <Text>User: {data.name} </Text>
    </View>
	);
}





