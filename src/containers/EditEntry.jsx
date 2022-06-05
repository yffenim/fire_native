import React, { useEffect, useState } from 'react';
import { VStack, HStack, Text, Button, Box, Heading, Input } from 'native-base';
import { formatTime } from '../functions/formatTime';
import { EditInputButtons } from './EditEntryButtons';
import { loadingText } from "../presentations/loadingFallback";
import l from '../../helpers/consolelog';

// TODO: Make the input the same buttons as the OG

// if entry is not empty, update it

export default function EditEntry({current_level, updated, title, urlModel, editLevel, setEditLevel}) {
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
		
		<EditInputButtons 
			editLevel={editLevel}
			setEditLevel={setEditLevel}
			urlModel={urlModel} 
			type={type} 
		/>
	</Box>

	)
};
