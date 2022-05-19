import React from 'react';
import { Heading, Box, Center, Text, Pressable, VStack } from 'native-base';
import l from '../../helpers/consolelog';

export function UserSelected({firstValue, secondValue, thirdValue}) {

// only show this if selected
// change model to be chosen model name from user

	return (
		<VStack space={5}>
			<Heading size="sm">
				Alertness: {firstValue}
			</Heading>
			<Heading size="sm">
				Seconds: {secondValue}
			</Heading>
			<Heading size="sm">
				Thirds: {thirdValue}
			</Heading>
		</VStack>
	)
}
