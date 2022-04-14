// import React, { Component } from "react";
// import {
//   Center,
//   Text,
//   Container,
//   Header,
//   Input,
//   Button,
//   Pressable,
//   Spacer,
// } from "native-base";
import { UserGreeting } from "../components/UserGreeting";

import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen() {

const [count, setCount] = useState(0);

	return (
    {UserGreeting}
	);

}

// class HomeScreen extends Component {
//   constructor(prop) {
//     super(prop);

//     this.state = {
//       alerts: [],
//       user: [],
//       average: 0,
//       count: 0,
//       new_alert: null,
//       isAlertsVisible: false,
//       showModal: false,
//     };
//   }

//   render() {
//     return (
//       <Center
//         _dark={{ bg: "blueGray.900" }}
//         _light={{ bg: "blueGray.50" }}
//         px={4}
//         flex={1}
//       >
//       </Center>
//     );
//   }
// }

// export default HomeScreen;
