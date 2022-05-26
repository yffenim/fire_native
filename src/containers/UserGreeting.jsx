import React, { useState, useEffect } from "react";
import { Text, Center, Box, Heading, VStack } from 'native-base';
// import { headersAtom } from '../atoms/headersAtom';
// import { useRecoilValue } from 'recoil';
import l from '../../helpers/consolelog'

// for User Screen
export default function UserGreeting({name}) {
  // const headers = useRecoilValue(headersAtom);
  // l("headers :", headers);

  return (
    <Box mt="5"> 
      <Heading>Hello there {name}!</Heading>
    </Box>
	);
}


