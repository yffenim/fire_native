import React from 'react';
import { Box, Button, Heading, Text } from 'native-base';
import { editApiCall } from '../functions/EditApiCalls';
import { headersAtom } from '../atoms/headersAtom';
import { ModelButtons } from './ModelButtons';
import { useRecoilValue } from 'recoil';
import l from '../../helpers/consolelog';


// Edit Input Buttons (the animated buttons)
export function EditInputButtons({editLevel, setEditLevel, type, urlModel}){
	// urlModel is renamed model here
	// l("editLevel in EditInputButtons: ", editLevel);	
	return (
		<Box bg="dark.100" mt="2" p="2" borderRadius="10">
			<Heading size="sm" pb="2">
				Please select a new level: {editLevel}
			</Heading>
			<ModelButtons 
				type={type} 
				model={urlModel} 
				setEditLevel={setEditLevel} 
			/>
		</Box>	
	)
};


// Submit New Level Edit
export function EditSubmitButton({onClose, level, urlModel, id, refresh}) {
	var body = null;
	const headers = useRecoilValue(headersAtom);

	// set up request body for patch request
	function whichRequestBody() {
		if ( urlModel === "alerts/" ) {
			body = JSON.stringify({
  			alert: {
	  		level: level,
				},
			});
		}
		else if ( urlModel === "seconds/" ) {
			body = JSON.stringify({
  			second: {
	  		level: level,
				},
			});
		}
		else if ( urlModel === "thirds/" ) {
			body = JSON.stringify({
  			third: {
	  		level: level,
				},
			});
		}
		else { 
			l("Error with requestBody for EditApiCalls");
		}
	};

	const handleSavePress = () => {
		whichRequestBody();
		handleEditApiCall();
	};

	const handleEditApiCall = async () => {
		await editApiCall(level, urlModel, id, body, headers);	
		onClose();
		refresh();
	};

	return (
		<Button onPress={()=>handleSavePress()}>
			Save
		</Button>
	)
}


// Cancel Edit Dialog
export function EditCancelButton({onClose, cancelRef}) {
	
	return (
		<Button 
			variant="unstyled" 
			olorScheme="coolGray" 
			onPress={onClose} 
			ref={cancelRef}
		>
  		Cancel
    </Button>
	)
}


