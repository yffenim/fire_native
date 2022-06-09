import React from 'react';
import { Pressable, Text, useToast, Box, VStack } from 'native-base';
// import { deleteModelRequest } from '../functions/ModelApiRequests';
import { headersAtom } from '../atoms/headersAtom';
import API from '../functions/APImodels';
import { useRecoilValue } from 'recoil';
import { baseURL } from '../functions/APIDevUrl';
import l from '../../helpers/consolelog';


export default function DeletePressable({id, refresh, urlModel}) {
	const toast = useToast();
	const deleteMsg = "Deleted!";
	const api = new API;
	const headers = useRecoilValue(headersAtom);
	// l("baseURL is:", baseURL);

	const deleteApiCall = () => {
		let model = "alerts";
		let url = baseURL + urlModel + id;
		l("headers sent: ", headers);
		l("delete url; ", url);
		api.delete(url, headers)
			.then(response => {
				alert("Alert deleted!");
			})
			.catch(error => {
				console.error(error);
		});
	};

	const deletePress = () => {
		deleteApiCall();
		refresh();
	};

	return (
  	<Pressable
    	w="70" bg="red.500"
      justifyContent="center"
      _pressed={{
        opacity: 0.5}}
			onPress={()=>{
				// deleteApiCall()gcc;
				deletePress();
			}}
		>
			<VStack alignItems="center" space={2}>
    		<Text color="white" fontSize="xs" fontWeight="medium">
        	DELETE
        </Text>
      </VStack>
    </Pressable>
	)
}



