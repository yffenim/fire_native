import React from 'react';
import { Text, Pressable } from 'native-base';
import l from '../../helpers/consolelog'

// click on Edit
// change the slider to be an edit thing - done
// change button to say Submit Edit! - done
// API call with ID 
// Re-render inside API call

export default function EditPressable({handleEdit}) {

	return(
		<Pressable onPress={handleEdit}	>
			<Text color="indigo.600" _dark={{ color: "indigo.600" } }>
				EDIT
			</Text>
		</Pressable>
	)
}


