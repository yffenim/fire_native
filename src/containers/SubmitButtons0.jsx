import React, { useState } from 'react';
import { Box, Text, Button, Center } from 'native-base';
import { postSecondTitle, postThirdTitle } from '../functions/TitlesApiRequests';
import { secondStatusAtom, thirdStatusAtom } from '../atoms/statusCodeAtoms';
import { secondsTitleAtom, thirdsTitleAtom } from '../atoms/titlesAtoms';
import { useRecoilState, useRecoilValue } from 'recoil';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { devSecondID, devThirdID } from '../../helpers/devID';
import l from "../../helpers/consolelog";


// Button + Action to Save Titles for FirstTimeScreen
export function SubmitTitlesButton({secondsTitle, thirdsTitle, navigation, validate, setSignedIn}) {

	// update atom state
	const [secondsTitleHook, setSecondsTitleHook] = useRecoilState(secondsTitleAtom);
	const [thirdsTitleHook, setThirdsTitleHook] = useRecoilState(thirdsTitleAtom);


	// button press handler
	const onSavePress = () => {
		validate() ? 
			submitTitles() : 
			l('Titles are not valid');
	}

	// api calls handler
	// TODO: add success check for the hooks and signed in 
	const submitTitles = async () => {
		putSecond();
		setSecondsTitleHook(secondsTitle); 		
		putThird();
		setThirdsTitleHook(thirdsTitle);
		setSignedIn(true); // add logic for only if true
	};

	// POST seconds title
	const putSecond = async () => {
		let secondId = devSecondID;	
		let test = await postSecondTitle(secondsTitle, secondId);
		l("return status: ", test);
	};

	// POST thirds title
	const putThird = async () => {
		let thirdId = devThirdID;
		await postThirdTitle(thirdsTitle, thirdId);
	};

	return (
		<Center	bg="darkBlue.900">
			<Button w="100"
				variant="outline"
				colorScheme="indigo"
				onPress={()=>{
					onSavePress();
				}}>
				Save
			</Button>
		</Center>		
	)
}


// SUBMIT USER EDITS
export function SubmitUser() {
	return (
		<Center>
			<Button
				mt="4"
				variant="outline"
				colorScheme="indigo"
			>
				Save
			</Button>
		</Center>
	)
}



// NOT CURRENTLY IN USE
//


// ADD NEW DATA ENTRY
export function SubmitButton() {
	const postApiCall = async () => {
    await postMomentRequest(5);
	}
	return (
		<Center>
			<Button w="200" h="10"
				onPress={()=>{postApiCall()}}
			>
				Save My Data!
			</Button>
		</Center>
	)
}
