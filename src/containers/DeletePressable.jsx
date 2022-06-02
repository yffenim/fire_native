import React, { useRef } from 'react';
import { useRecoilRefresher_UNSTABLE } from 'recoil';
import { Pressable, Text, useToast, Box, VStack } from 'native-base';
import { deleteModelRequest } from '../functions/ModelApiRequests';
import l from '../../helpers/consolelog';


export default function DeletePressable({id, refresh, urlModel}) {
	const toast = useToast();
	const deleteMsg = "Deleted!";
	
	const deleteApiCall = async () => {
		await deleteModelRequest(id, urlModel, toast);
		refresh();
	};

	return (
  	<Pressable
    	w="70" bg="red.500"
      justifyContent="center"
      _pressed={{
        opacity: 0.5}}
			onPress={()=>{
				deleteApiCall();
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



