import React, { useEffect } from 'react';
import { Pressable, Text } from 'native-base';
import l from '../../helpers/consolelog';

export default function NevermindPressable({setVisible, setEditMode, editMode}) {


// l("editMode NVM: ", editMode);

	const toggleTest = () => {
		(editMode === true ? setEditMode(false) : setEditMode(true));
    l(editMode);
	}



// the question is WHY is my setEditMode not working????
	// function handlePress() { 
	// 	setVisible(false);
	// 	setEditMode(!editMode);
	// 	l(editMode);
	// };


	// useEffect(() => {
   // console.log('editMode State Updated from NVM: ', editMode);
	// }, [editMode]);

	return(
		// <Pressable onPress={()=>{handlePress()}} >
		<Pressable onPress={toggleTest}>
			<Text color="indigo.600" _dark={{ color: "indigo.600" } }>
				NEVERMIND
			</Text>
		</Pressable>
	)
}


