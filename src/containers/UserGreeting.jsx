import React, { useState, useEffect } from "react";
import { Text, Center, Box } from 'native-base';
import l from '../../helpers/consolelog'
// CURRENT INACTIVE THOUGH WORKING/WILL BE USED

const UserGreeting = ({name}) => {

    
  return (
    <Box>
      <Text>Hello there {name}!</Text>
    </Box>

	);
}

export default UserGreeting;

{/*
    <Box m="10" h="100" mt="-100">
      <Text h="10" fontSize="2xl" color="indigo.200">
        Hello there {name}!
      </Text>
    </Box>
*/}
