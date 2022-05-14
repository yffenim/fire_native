import React from 'react';
// import { useRecoilValue } from 'recoil';
import { Box, Text, Heading, VStack, HStack, Pressable} from 'native-base';
// import { momentsAtom } from '../atoms/momentsAtom';
import l from '../../helpers/consolelog';


// Display Model Stats Heading
export function ModelStats({avg, count}) {
	return (
		<Box p="4" mb="5"
			bg="coolGray.800" 
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


