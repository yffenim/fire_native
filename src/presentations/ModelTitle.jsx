import React, {useState, useEffect, forwardRef, useRef, useImperativeHandle} from 'react';
import { Text, Heading, Center, HStack, Box, Button } from 'native-base';
import l from '../../helpers/consolelog';
// Model Title Heading for AddDataScreen
// Make API call here for which model is being tracked? 

function ModelTitle({title, level}) {


	return (
		<Center>
			<HStack>
				<Heading 
					bg="secondary.900" 
					p="1" size="lg" 
					mt="20" mb="5"
					borderRadius="10" 
				>
					Track your {title}
				</Heading>
				<Text>{"      "}</Text>
				<Box h="39" w="35" mt="20" 
					alignItems="center"
					borderWidth="1" 
					borderColor="secondary.800"
					borderRadius="5"
				>
					<Text fontSize="2xl">{level}</Text>
				</Box>
			</HStack>
		</Center>
	)
}

export default ModelTitle;
