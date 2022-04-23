import React from 'react';
import { Text, Heading } from 'native-base';

// Model Title Heading for AddDataScreen
// Make API call here for which model is being tracked? 

export function ModelTitle({model}) {
	
	return (
		<Heading size="sm" m="4" h="50">{model}</Heading>
	)
}
