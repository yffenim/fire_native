import React from "react";
import { Text, Box, Heading } from 'native-base';
import l from '../../helpers/consolelog'

// for User Screen
export default function UserGreeting({name}) {

  return (
    <Box mt="5" mb="5"> 
      <Heading>Hello there {name}!</Heading>
    </Box>
	);
}


