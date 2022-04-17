import React from 'react';
import { Pressable, Text } from 'native-base';


export default function NevermindPressable() {

	return(
		<Pressable>
			<Text color="indigo.600" _dark={{ color: "indigo.600" } }>
				NEVERMIND
			</Text>
		</Pressable>
	)
}
