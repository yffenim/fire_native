import React, { useEffect, useState } from 'react';
import { VStack, HStack, Text, Button, Box, Heading, Input } from 'native-base';
import { formatTime } from '../functions/formatTime';
import l from '../../helpers/consolelog';
import { AnimatedButton } from './InputButtons';
import { ModelButtons } from './ModelButtons';
import { loadingText } from "../presentations/loadingFallback";

// TODO: Make the input the same buttons as the OG

// if entry is not empty, update it

export default function EditEntry({current_level,updated, title, setEditLevel, editLevel}) {
	const type = "edit"

	return (
		<Box>
		<VStack
			bg="dark.100"
			borderRadius="10"
			p="1"
		>
			<HStack>
				<Heading size="sm" pr="2">
					Current Level:  
				</Heading>
				<Heading size="sm" bg="dark.50">
					{current_level}
				</Heading>
			</HStack>
			<HStack>
				<Heading size="sm" pr="2">
					Updated: 
				</Heading>
				<Heading size="sm" bg="dark.50">
					{updated}
				</Heading>
			</HStack>
		</VStack>
		<Box bg="dark.100" mt="2" p="2" borderRadius="10">
			<Heading size="sm" pb="2">
				Please select a new level: {editLevel}
			</Heading>
			<ModelButtons type={type} model={title} setEditLevel={setEditLevel} />
		</Box>	
	</Box>

	)
}
