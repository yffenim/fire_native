import React from 'react';
import { Box, Text, Heading, VStack } from 'native-base';


export default function FirstTimeText() {
	return (
  	<Box mt="10" mb="5">
      <Heading mb="5" color="primary.300" font="20">
       It's your first time signing in!
      </Heading>
      <Text mb="5">
        This app allows you to track your alertness and two other categories. <Box bg="primary.300">Please create them now.</Box>
      </Text>
      <Text italic>
        You can change this later.
      </Text>
    </Box>
	)
};



