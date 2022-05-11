import React from 'react';
import { Pressable, Text, useToast, Box, VStack } from 'native-base';
import { ToastBox } from '../presentations/ToastBox';
import { deleteRequest } from '../functions/MomentsApiRequests.jsx';
import l from '../../helpers/consolelog';


export default function DeletePressable({deleteId, refresh}) {


// handler for DELETE request
	const deleteApiCall = async () => {
		await deleteRequest({deleteId});
		refresh();
	}

// component for nicer user alerts 
  const toast = useToast();
	const deleteMsg = "Moment Deleted"

	return (
  	<Pressable
    	w="70" bg="red.500"
      justifyContent="center"
      // onPress={() => deleteRow(rowMap, data.item.key)}
      _pressed={{
        opacity: 0.5}}
			onPress={()=>{
				deleteApiCall({deleteId});
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



