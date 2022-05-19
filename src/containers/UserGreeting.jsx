import React, { useState, useEffect } from "react";
import { Text, Center, Box, Heading, VStack } from 'native-base';
import l from '../../helpers/consolelog'

export const UserGreeting = ({name}) => {
  return (
    <Box h="80" pt="1"> 
      <VStack>
        <Heading size="md">Hello</Heading>
        <Heading size="md">there</Heading>
        <Heading size="md">{name}!</Heading>
        <Text color="primary.400">How do you feel?</Text>
      </VStack>
    </Box>

	);
}


