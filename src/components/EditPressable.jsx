import React, { useState } from 'react';
import { Text, Pressable, Modal, Box } from 'native-base';
import EditModal from './EditModal'; 
// import { patchRequest } from '../api/ApiRequests';
import l from '../../helpers/consolelog'


export default function EditPressable({editId}) {
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(true);
	}

	return(
		<Box>
		<Pressable onPress={()=>{
			toggleModal();
			}}
		>
			<Text color="indigo.600" _dark={{ color: "indigo.600" } }>
				EDIT
			</Text>
		</Pressable>
		{showModal &&
		<EditModal setShowModal={setShowModal} showModal={showModal} editId={editId} />}
	</Box>
	)
}


