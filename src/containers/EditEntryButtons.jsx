import React from 'react';
import { Box, Button, Text } from 'native-base';
import { editApiCall } from '../functions/EditApiCalls';
import l from '../../helpers/consolelog';

// Submit New Level Edit
export function EditSubmitButton({onClose, level, urlModel, id}) {	

	const handleSubmit = () => {
		editApiCall(level, urlModel, id);	
		onClose();
	}

	return (
		<Button onPress={()=>handleSubmit()}>
			Save
		</Button>
	)
}


// Cancel Edit Dialog
export function EditCancelButton({onClose, cancelRef}) {
	
	return (
  	<Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
  		Cancel
    </Button>
	)
}


