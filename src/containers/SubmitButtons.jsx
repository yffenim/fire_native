import React from 'react';
import { Box, Heading, Text, Button, Pressable, Fab, Center } from 'native-base';
// import { postMomentRequest } from '../functions/MomentsApiRequests';
// import { postSecondRequest } from '../functions/SecondsApiRequests';
// import { postThirdRequest } from '../functions/ThirdsApiRequests';
import { postSecondTitle, postThirdTitle } from '../functions/TitlesApiRequests';
import l from "../../helpers/consolelog";
import { secondsAtom } from '../atoms/secondsAtom';
import { thirdsAtom } from '../atoms/thirdsAtom';
import { userAtom } from '../atoms/userAtom';
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const momentsURL = "https://limitless-citadel-71686.herokuapp.com/api/alerts/"


// Submit FAB (ADD ENTRY SCREEN)
export function SubmitFab({firstValue, secondValue, thirdValue}) {

	const handleFab = () => {
		l("fab clicked");
		postAlert();
		postSecond();
		postThird();
	}

	const postSecond = async () => {
		await postSecondsTitle(secondValue)
	}

	const postThird = async () => {
		await postThirdRequest(thirdValue)
	}

	return (
		<Fab renderInPortal={false} variant="outline"
			shadow={2} size="lg" bg="pink.800"
			onPress={()=>{handleFab()}}
			icon={
				<Entypo name="plus" size={24} color="white" />
			}
		/>
	)
};

// ADD TITLES FOR FIRST TIME SCREEN 
// TODO: 
// do I want to set local state with the titles 
// or do i want the API calls to do it in the relevant pages? 

export function SubmitTitles({secondsTitle, thirdsTitle, firstTime, setFirstTime, navigation}) {
	const setSecondsAtom = useSetRecoilState(secondsAtom);
	const setThirdsAtom = useSetRecoilState(thirdsAtom);
	const testSecond = useRecoilValue(secondsAtom);
	const testThirds = useRecoilValue(thirdsAtom)
	;  
	const userData = useRecoilValue(userAtom);
  const secondId = userData[1]["secondId"];
  const thirdId = userData[1]["thirdId"];

// I need to grab the ID of the first obj
// so lets set it up in the API
// this means I need to either have it set up for USER atom
// OR, I need to grab all my model data now
	const handleTitleSubmit = async () => {
		await postSecondTitle(secondsTitle, secondId);
		// await postThirdTitle(thirdsTitle, thirdId)
		// navigation.navigate("Add Data");
	}


	// SETTING ATOMS VERSION
	// const handleTitleSubmit = () => {
	// 	setSecondsAtom(secondsTitle);
	// 	setThirdsAtom(thirdsTitle);
	// }

	// VALIDATIONS
	// const onSubmit = () => {
    // validate() ? l('Title Form Submitted') :
    // l('Validation Failed');
  // };

	return (
		<Box>
			<Button 
				variant="outline"
				colorScheme="indigo"
				onPress={()=>{
					handleTitleSubmit()
				}}>
				Save
			</Button>
		</Box>		
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
