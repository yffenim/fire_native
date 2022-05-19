import React from 'react';
import { Box, Heading, Text, Button, Pressable } from 'native-base';
import l from '../../helpers/consolelog';

// All Submit buttons?

export function SubmitButton() {

	return (
		<Box mt="5" w="300">
			<Button variant="outline">
				Save My Data!
			</Button>
		</Box>		
	)
}

// export function SubmitTitles(){
	
// 	return (
// 		<Box mt="5" w="300">
// 			<Button colorScheme="indigo">
// 				Submit Categories!
// 			</Button>
// 		</Box>		
// 	)
// }
