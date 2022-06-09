import React from 'react';
import { Text, Pressable, AlertDialog, VStack } from 'native-base';
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


