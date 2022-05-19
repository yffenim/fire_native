import React from 'react';
import { Heading, Box, Center, Text, Pressable, VStack } from 'native-base';
import l from '../../helpers/consolelog';
import { secondsAtom } from '../atoms/secondsAtom';
import { thirdsAtom } from '../atoms/thirdsAtom';
import { useRecoilValue } from 'recoil'

export function UserSelected({firstValue, secondValue, thirdValue}) {

const seconds = useRecoilValue(secondsAtom);
const thirds = useRecoilValue(thirdsAtom);
// TODO: only show this if value has been selected
// change model to be chosen model name from user

	return (
		<VStack space={5}>
			<Heading size="sm">
				Alertness: {firstValue}
			</Heading>
			<Heading size="sm">
				{seconds}: {secondValue}
			</Heading>
			<Heading size="sm">
				{thirds}: {thirdValue}
			</Heading>
		</VStack>
	)
}
