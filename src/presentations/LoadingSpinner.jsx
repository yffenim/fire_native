import React from 'react';
import { Spinner, Heading, HStack, Center } from 'native-base';


export const LoadingSpinner = 
<Center>
	<HStack space={2} justifyContent="center">
  	<Spinner accessibilityLabel="Loading posts" />
    <Heading color="primary.500" fontSize="md">
      Loading
    </Heading>
  </HStack>
</Center>
