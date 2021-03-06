import React, { useEffect } from 'react';
import { Box, Text, Heading, VStack, HStack, Center, Pressable} from 'native-base';
import { levelColour } from '../functions/levelColour';
import l from '../../helpers/consolelog';


// Display Model Stats Heading
export function ModelStats({avg, count, model}) {

	// const color = () => {
	// 	l("urlModel: ", urlModel);
	// 	if (urlModel === "alerts/") {
	// 		l("inside alernts");
	// 		modelColor = "violet.400";
	// 	};
	// };

	// useEffect(()=>{
	// 	setColor();
	// }, []);


	return (
		<Box p="4" borderRadius="2"
			bg="darkBlue.900"
		>
			<VStack space={1}>
				<Heading size="md" color="darkBlue.50">
					total { }
					<Text color={levelColour(avg)} >
						{model}
					</Text> 
					{ } entries: {count}
				</Heading>
				<Heading size="md" color="darkBlue.50">
					your { }
					<Text color={levelColour(avg)} >
						{model} 
					</Text>
					{ } average: {avg}
				</Heading>
			</VStack>
		</Box>
	)
}


export function NoStats({navigation}) {
	return (
		<Box p="4" mb="5"
			bg="coolGray.800" 
		>
			<VStack space={1}>
				<Heading size="md" color="coolGray.200">
					No data available.
				</Heading>
				<Pressable 
					onPress={()=>{navigation.navigate("Add Entry")
				}}>
					<Heading size="md" color="coolGray.200">
						Please add an entry here!
					</Heading>
				</Pressable>
			</VStack>
		</Box>
	)
}


