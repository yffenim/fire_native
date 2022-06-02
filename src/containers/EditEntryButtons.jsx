import React from 'react';
import { Box, Button, Heading, Text } from 'native-base';
import { editApiCall } from '../functions/EditApiCalls';
import { devID } from '../../helpers/devID';
import { ModelButtons } from './ModelButtons';
import l from '../../helpers/consolelog';

// Submit New Level Edit
export function EditSubmitButton({onClose, level, urlModel, id, refresh}) {
	var body = null;

	// set up request body for patch request
	function whichRequestBody() {
		if ( urlModel === "alerts/" ) {
			body = JSON.stringify({
  			alert: {
	  		level: level,
				user_id: devID
				},
			});
		}
		else if ( urlModel === "seconds/" ) {
			body = JSON.stringify({
  			second: {
	  		level: level,
				user_id: devID
				},
			});
		}
		else if ( urlModel === "thirds/" ) {
			body = JSON.stringify({
  			third: {
	  		level: level,
				user_id: devID
				},
			});
		}
		else { 
			l("Error with requestBody for EditApiCalls");
		}
	};

	const handleSubmit = () => {
		whichRequestBody();
		l("made request body: ", body);
		editApiCall(level, urlModel, id, body);	
		onClose();
		refresh();
	};


	return (
		<Button onPress={()=>handleSubmit()}>
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


// Edit Input Buttons (the animated buttons)
export function EditInputButtons({editLevel, setEditLevel, type, urlModel}){
	// urlModel is renamed model here
	
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
}
