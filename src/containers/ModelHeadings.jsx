import React from 'react';
import { Heading, Text, HStack, VStack, Box, Center } from 'native-base';
import { useRecoilValue } from 'recoil';
import { secondsAtom } from '../atoms/secondsAtom';
import { thirdsAtom } from '../atoms/thirdsAtom';
import l from '../../helpers/consolelog';


export function FirstModelHeading({firstValue}) {
	return (
		<VStack p="1" ml="1"
			bg="darkBlue.800" 
			borderRadius="10"
		>
			<Center p="0" bg="darkBlue.800">
				<Heading>add new</Heading>
				<Box bg="darkBlue.900" w="120"
					borderRadius="5" alignItems="center"
				>
					<Heading>
						alertness
					</Heading>
				</Box>
			</Center>
			<Center bg="darkBlue.800">
				<Heading size="xl" color="yellow.50">
					{firstValue}
				</Heading>
			</Center>	
		</VStack>
	)
};

export function SecondModelHeading({secondValue}) {
	const secondsTitle = useRecoilValue(secondsAtom)
	return (
		<VStack p="1" mr="1"
			bg="darkBlue.700" 
			borderRadius="10"
		>
			<Center p="0" bg="darkBlue.700">
				<Heading>add new</Heading>
				<Box bg="darkBlue.900" w="120"
					borderRadius="5" alignItems="center"
				>
					<Heading>
						{secondsTitle}
					</Heading>
				</Box>
			</Center>
			<Center bg="darkBlue.700">
				<Heading size="xl" color="yellow.50">
					{secondValue}
				</Heading>
			</Center>	
		</VStack>
	)
};

export function ThirdModelHeading({thirdValue}) {
	const thirdsTitle = useRecoilValue(thirdsAtom)
	return (
		<VStack p="1" ml="1"
			bg="darkBlue.800" 
			borderRadius="10"
		>
			<Center p="0" bg="darkBlue.800">
				<Heading>add new</Heading>
				<Box bg="darkBlue.900" w="120"
					borderRadius="5" alignItems="center"
				>
					<Heading>
						{thirdsTitle}
					</Heading>
				</Box>
			</Center>
			<Center bg="darkBlue.800">
				<Heading size="xl" color="yellow.50">
					{thirdValue}
				</Heading>
			</Center>	
		</VStack>
	)
};

{/*
		<Heading>add new alertness: {firstValue} </Heading>

		*/}
