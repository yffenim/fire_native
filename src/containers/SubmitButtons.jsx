import React, { useState } from 'react';
import { Box, Text, Button, Center } from 'native-base';
import { postSecondTitle, postThirdTitle } from '../functions/TitlesApiRequests';
import { secondStatusAtom, thirdStatusAtom } from '../atoms/statusCodeAtoms';
import { secondsTitleAtom, thirdsTitleAtom } from '../atoms/titlesAtoms';
import API from '../functions/API';
import { useRecoilState, useRecoilValue } from 'recoil';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { devSecondID, devThirdID } from '../../helpers/devID';
import l from "../../helpers/consolelog";


// Button + Action to Save Titles for FirstTimeScreen
export function SubmitTitlesButton({secondsTitle, thirdsTitle,  validate, setSignedIn, first}) {
	const api = new API;
	// update atom state
	const [secondsTitleHook, setSecondsTitleHook] = useRecoilState(secondsTitleAtom);
	const [thirdsTitleHook, setThirdsTitleHook] = useRecoilState(thirdsTitleAtom);
	const [secondSuccess, setSecondSuccess] = useState(null);
	const [thirdSuccess, setThirdSuccess] = useState(null);

	// button press handler
	const onSavePress = () => {
		validate() ? 
			putSecond() : 
			l('Titles are not valid');
	}

	// first api call to Second Model	
	const putSecond = () => {
		let url = "http://localhost:3000/api/seconds/2"
		let body = JSON.stringify({
    	second: {
				title: secondsTitle,
        user_id: 1,
        level: 5
			}
		});
		api.patch(url, body)
			.then(response => {
				putThird();
			})
			.catch(error => {
				console.error(error);
		});
	};

	// if the input is coming from first
// then set Signed in

	// second api call to third model
 	const putThird = () => {
		let url = "http://localhost:3000/api/thirds/3"
		let body = JSON.stringify({
    	third: {
				title: thirdsTitle,
        user_id: 1,
        level: 5
			}
		});
		api.patch(url, body)
			.then(response => {
			setSecondsTitleHook(secondsTitle);
			setThirdsTitleHook(thirdsTitle);
			if (first === "first") {setSignedIn(true)};
			})
			.catch(error => {
				console.error(error);
		});
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
