import React, { useState } from 'react';
import { Box, Text, Button, Center } from 'native-base';
import { postSecondTitle, postThirdTitle } from '../functions/TitlesApiRequests';
import { postSecondRequest } from '../functions/SecondsApiRequests';
import { postThirdRequest } from '../functions/ThirdsApiRequests';
import { secondsTitleAtom, thirdsTitleAtom } from '../atoms/titlesAtoms';
import { headersAtom } from '../atoms/headersAtom';
import { userAtom } from '../atoms/userAtom';
import { devID, halID } from "../../helpers/devID";
import { baseURL } from "../functions/APIDevUrl";
// import { baseURL } from "../functions/APIProdUrl";
import API from '../functions/API';
import { useRecoilState, useRecoilValue } from 'recoil';
import { AntDesign, Entypo } from '@expo/vector-icons';
import { devSecondID, devThirdID } from '../../helpers/devID';
import l from "../../helpers/consolelog";


// Button + Action to Save Titles for FirstTimeScreen
export function SubmitTitlesButton({secondsTitle, thirdsTitle,  validate, setSignedIn, firstTime}) {
	const api = new API;
	// update atom state for titles
	const [secondsTitleHook, setSecondsTitleHook] = useRecoilState(secondsTitleAtom);
	const [thirdsTitleHook, setThirdsTitleHook] = useRecoilState(thirdsTitleAtom);
	// get data required for requests
	const headers = useRecoilValue(headersAtom);
	const userData = useRecoilValue(userAtom);
	const uid = userData[1]["id"];
	const secondsId = userData[1]["secondsId"];
	const thirdsId = userData[1]["thirdsId"];
	// l(`seconds and thirds id: ${secondsId} and ${thirdsId}`);

	// check if this is a first time request 
	const onSavePress = () => {
		if (firstTime) {
			postRequests();
		} 
		else {
			putRequests();
		}
	};

	// Edit model titles if not the first time
	const putRequests = () => {
		l("putRequests");
		validate() ? putSecond() : l('Titles are not valid for put');
	};

	// Create system default objects for models if yes first time
	const postRequests = () => {
		l("postRequests");
		validate() ? postSecond() : l('Titles are not valid for post');
	};

	///// POST REQUESTS /////
	// Create system default object for Second model
	const postSecond = async () => {
		let level = 5;
		await postSecondRequest(level, headers, uid, secondsTitle)
		postThird();
	}
	// Create system default object for Third model
	const postThird = async () => {
		let level = 5;
		await postThirdRequest(level, headers, uid, thirdsTitle)
	}

	///// PUT REQUESTS /////
	const putSecond = () => {
		let url = baseURL + "seconds/" + secondsId
		let body = JSON.stringify({
    	second: {
				title: secondsTitle,
        user_id: uid,
        level: 5
			}
		});
		api.patch(url, body, headers)
			.then(response => {
				putThird();
			})
			.catch(error => {
				console.error(error);
		});
	};

	// second api call to third model
	const putThird = () => {
		let url = baseURL + "thirds/" + thirdsId
		let body = JSON.stringify({
    	third: {
				title: thirdsTitle,
        user_id: uid,
        level: 5
			}
		});
		api.patch(url, body, headers)
			.then(response => {
			setSecondsTitleHook(secondsTitle);
			setThirdsTitleHook(thirdsTitle);
			if (firstTime) {setSignedIn(true)};
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
				Save Titles
			</Button>
		</Center>		
	)
}


// SUBMIT USER EDITS
// export function SubmitUser() {
// 	return (
// 		<Center>
// 			<Button
// 				mt="4"
// 				variant="outline"
// 				colorScheme="indigo"
// 			>
// 				Save
// 			</Button>
// 		</Center>
	// )
// }

