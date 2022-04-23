import React from 'react';
import { Pressable, Text, useToast, Box } from 'native-base';
import { ToastBox } from '../presentations/ToastBox';
import { deleteRequest } from '../functions/ApiRequests.jsx';
import l from '../../helpers/consolelog';


export default function DeletePressable({deleteId, updateDisplay}) {

// handler for DELETE request
	const deleteApiCall = async () => {
		await deleteRequest({deleteId});
		updateDisplay();
	}

// component for nicer user alerts 
  const toast = useToast();
	const deleteMsg = "Moment Deleted"

	return (
		<Pressable 
			onPress={()=>{
				deleteApiCall({deleteId});
				toast.show({render: () => { 
					return (
						<ToastBox text={deleteMsg} />
					)
        }
			});					
		}}>
			<Text	color="indigo.600" _dark={{ color: "indigo.600" }}>
				DELETE
			</Text>
		</Pressable>
	)
}
