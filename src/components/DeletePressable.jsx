import React from 'react';
import { Pressable, Text, useToast, Box } from 'native-base';
import { ToastBox } from './ToastBox';
import { deleteRequest } from '../api/ApiRequests.jsx';
import l from '../../helpers/consolelog';

const momentsURL = "https://limitless-citadel-71686.herokuapp.com/api/alerts/"


export default function DeletePressable({item, updateDisplay}) {


// TODO: debug why request is working and returning as expected
// but also throwing an error that Network response is not ok?


// handler for DELETE request
	const deleteApiCall = async () => {
		await deleteRequest({item});
		updateDisplay();
	}

// component for nicer user alerts 
  const toast = useToast();
	const deleteMsg = "Moment Deleted"

	return (
		<Pressable 
			onPress={()=>{
				deleteApiCall({item});
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

