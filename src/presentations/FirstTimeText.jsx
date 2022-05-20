import React from 'react';
import { Box, Text, Heading } from 'native-base';


export default function FirstTimeText() {
	return (
  	<Box>
      <Text>
        Hello! You are being directed here because it's your first time logging on.
      </Text>
      <Text>
        This app allows you to track your alertness and two other categories. Please create the other two categories now:
      </Text>
      <Text italic>
        (You can change this later.)
      </Text>
		</Box>
	)
};
