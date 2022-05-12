import React from 'react';
import { useRecoilRefresher_UNSTABLE } from 'recoil';
import { Pressable, Text, useToast, Box, VStack } from 'native-base';
import { ToastBox } from '../presentations/ToastBox';
import { momentsAtom } from '../atoms/momentsAtom';
import { deleteRequest } from '../functions/MomentsApiRequests.jsx';
import l from '../../helpers/consolelog';

// TODO: move toast to success condition

export default function DeletePressable({id, refresh}) {
	

// handler for DELETE request
	const deleteApiCall = async () => {
		l("delete id: ", id);
		await deleteRequest(id);
		refresh();
	}

// component for nicer user alerts 
  const toast = useToast();
	const deleteMsg = "Moment Deleted"

	return (
  	<Pressable
    	w="70" bg="red.500"
      justifyContent="center"
      _pressed={{
        opacity: 0.5}}
			onPress={()=>{
				deleteApiCall();
				toast.show({render: () => { 
					return (
						<ToastBox text={deleteMsg} />
					)}
				});					
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



