import React, { useEffect } from 'react';
import { Pressable, Text } from 'native-base';
import l from '../../helpers/consolelog';

export default function NevermindPressable({setVisible, setEditMode, editMode}) {

// debugging why setEditMode is toggling but not setting?
	const toggleTest = () => {
		(editMode === true ? setEditMode(false) : setEditMode(true));
		l(editMode);
	}


// the question is WHY is my setEditMode not working????
	function handlePress() { 
		setVisible(false);
		setEditMode(!editMode);
		l(editMode);
	};

	// useEffect(() => {
   // console.log('useEffect from NevermindPressable editMode State Updated:: ', editMode);
	// }, [editMode]);

	return(
		<Pressable 
			onPress={()=>{
				toggleTest()
				handlePress()
			}}>
			<Text color="indigo.600" _dark={{ color: "indigo.600" } }>
				NEVERMIND
			</Text>
		</Pressable>
	)
}


