import React, { useState, useEffect } from "react";
// import { Text } from "native-base";
import { StyleSheet, Text, View, Button } from 'react-native';
// debugging why hooks isn't working
// prints false if multiple reacts
// have fixed it, now prints true but hooks still not working
// require('react-dom');
// window.React2 = require('react');
// console.log(window.React1 === window.React2);

const l = (arg) => console.log(arg);
// const url = 'https://limitless-citadel-71686.herokuapp.com/api/users/1';

// export default function greeting() {
// 	return <Text>Hello</Text>
// }

export function getUser() {
  return fetch(url)
    .then(response => response.json())
}

export function Greeting() {
  const [user, setUser] = React.useState([]);

  const handleUserResults = () => {
    getUser().then(response => { setUser(response); 
    l(response);
    });
  }

  return (
    <View>
      <Text>User: </Text>
    </View>
	);
}


// export default function UserGreeting() {

// const [user, setUser] = useState([]);

// useEffect(()=> {
//   // l(user;
//   fetch(url)
//   .then(response => response.json())
//   .then(response => setUser(response))
//   },
//   [])

// 	return(
// 		<Text>Hello {user}</Text>

// 	)
// }

