import React, { Component } from 'react';
import { VStack, HStack, Center, Text, Box, Button, NativeBaseProvider, Heading, FormControl, Input, Link } from "native-base";

// var h = require('../react-native-hyperscript');
// var React = require('react-native');
// shortened expression for loggin
const l = (arg) => console.log(arg);


class UserDashboard extends Component {
  render(){
    return (
      <NativeBaseProvider>
        <Text>Press</Text>
        <Button 
          shadow={2}
          colorScheme="indigo"
          onPress={() => {l("Login Pressed!")}
          }
      / >      
      </NativeBaseProvider>    
    )
  } 
}


export default UserDashboard;
