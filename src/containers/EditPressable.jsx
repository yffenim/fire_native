import React, { useState } from 'react';
import { Text, Pressable, Modal, Box, VStack } from 'native-base';
import EditModal from './EditModal'; 
// import { patchRequest } from '../api/ApiRequests';
import l from '../../helpers/consolelog'


export default function EditPressable({eId, eLevel, eUpdated, onPressCall}) {
	// const [showModal, setShowModal] = useState(false);
	// const toggleModal = () => {
	// 	setShowModal(true);
	// }

	return(
		<Pressable w="70" ml="auto"
    	bg="coolGray.300"
      justifyContent="center"
      _pressed={{opacity: 0.5}}
			borderRadius="1"
			onPress={()=>{
				// toggleModal()
				// close row
		}}>
    	<VStack alignItems="center" space={2}>
				<Text 
					fontSize="xs" 
					fontWeight="medium" 
					color="coolGray.800"
				>
            EDIT
          </Text>
        </VStack>
      </Pressable>
	)
}


