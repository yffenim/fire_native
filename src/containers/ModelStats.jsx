import React from 'react';
// import { useRecoilValue } from 'recoil';
import { Center, Box, Text, Heading, VStack, HStack } from 'native-base';
// import { momentsAtom } from '../atoms/momentsAtom';
import l from '../../helpers/consolelog';

// TODO:
// Try this in old way of passing state not reaching for atom

export default function ModelStats({avg, count}) {
	// make them stacked 

	return (
		<Box p="4" mb="5"
			bg="coolGray.800" 
			borderRadius="10"
		>
			<VStack space={1}>
				<Heading size="md" color="coolGray.200">
					Total Alertness Entries: {count}
				</Heading>
				<Heading size="md" color="coolGray.200">
					Your Average Alertness: {avg}
				</Heading>
			</VStack>
	</Box>
	)
}



