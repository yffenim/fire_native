import React, { useState } from 'react';
import { Text, Pressable, AlertDialog, Box, VStack } from 'native-base';
import EditDialog from './EditDialog';
import API from '../functions/API';
// import EditModal from './EditModal'; 
// import { patchRequest } from '../api/ApiRequests';
import l from '../../helpers/consolelog'


export default function EditPressable({id, closeRow, rowMap, setIsOpen, getEntry}) {

	const handleEdit = () => {
		getEntry(id);
		closeRow(rowMap, id);
		setIsOpen(true);
	};

	return(
			<Pressable 
				w="70" ml="auto"
    		bg="coolGray.300"
      	justifyContent="center"
      	_pressed={{opacity: 0.5}}
				borderRadius="1"
				onPress={()=>{
					handleEdit();
				}}>
    		<VStack alignItems="center" space={2}>
					<Text 
						fontSize="xs" 
						fontWeight="medium" 
						color="coolGray.800"
					>
            EDIT
          </Text>
        </VStack>
			</Pressable>
	)
}


