import React, { useState } from 'react';
import { Box, Text, Button, Center } from 'native-base';
import { postSecondTitle, postThirdTitle } from '../functions/TitlesApiRequests';
import l from "../../helpers/consolelog";
import { secondsAtom } from '../atoms/secondsAtom';
import { thirdsAtom } from '../atoms/thirdsAtom';
// import { userAtom } from '../atoms/userAtom';
import { secondStatusAtom, thirdStatusAtom } from '../atoms/statusCodeAtoms';
import { useRecoilState, useRecoilValue } from 'recoil';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { devSecondID, devThirdID } from '../../helpers/devID';


// TODO: 
// move this to the page load for FirstTimeScreen
	// get OIDS of the default model objects to change the title of object 
	// const userData = useRecoilValue(userAtom);
  // const secondId = userData[1]["secondId"];
// const thirdId = userData[1]["thirdId"];
// add logic for 

// Button + Action to Save Titles for FirstTimeScreen
export function SubmitTitlesButton({secondsTitle, thirdsTitle, navigation, validate}) {
	const [secondsHook, setSecondsHook ] = useRecoilState(secondsAtom);
	const [thirdsHook, setThirdsHook] = useRecoilState(thirdsAtom);
	
	// button press handler
	const onSavePress = () => {
		l("clicked");
		validate() ? 
			submitTitles() : 
			l('Titles are not valid');
	}

	// api calls handler
	const submitTitles = async () => {
		putSecond();
		putThird();
		setSecondsHook(secondsTitle);
		setThirdsHook(thirdsTitle);
		navigation.navigate("Add Data"); 
	};

	// POST seconds title
	const putSecond = async () => {
		let secondId = devSecondID;	
		await postSecondTitle(secondsTitle, secondId);
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
