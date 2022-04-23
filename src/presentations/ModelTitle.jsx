import React from 'react';
import { Text, Heading, Center } from 'native-base';

// Model Title Heading for AddDataScreen
// Make API call here for which model is being tracked? 

export function ModelTitle({model}) {

	return (
		<Center>
			<Heading 
				bg="secondary.900" 
				p="1" size="xl" 
				mt="20" mb="5"
				borderRadius="10" 
			>
				Track Your {model}
			</Heading>
		</Center>
	)
}
