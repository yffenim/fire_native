import React from 'react';
import { Box, Heading, Text, Button, Pressable, Fab, Center } from 'native-base';
import { postMomentRequest } from '../functions/MomentsApiRequests';
import { postSecondRequest } from '../functions/SecondsApiRequests';
import { postThirdRequest } from '../functions/ThirdsApiRequests';
import { postSecondTitle, postThirdTitle } from '../functions/TitlesApiRequests';
import l from "../../helpers/consolelog";
import { secondsAtom } from '../atoms/secondsAtom';
import { thirdsAtom } from '../atoms/thirdsAtom';
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

	const postAlert = async () => {
		await postMomentRequest(firstValue)
	}

	const postSecond = async () => {
		await postSecondRequest(secondValue)
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

// ADD TITLES FOR MODELS (USER SCREEN)
export function SubmitTitles({secondsTitle, thirdsTitle, firstTime, setFirstTime}) {
	const setSecondsAtom = useSetRecoilState(secondsAtom);
	const setThirdsAtom = useSetRecoilState(thirdsAtom);
	const testSecond = useRecoilValue(secondsAtom);
	const testThirds = useRecoilValue(thirdsAtom);
	// const atomTest = true;
	const atomTest = false;

	const handleTitleSubmit = async () => {
		// await postSecondRequest(secondsTitle);
		// await postThirdRequest(thirdsTitle)
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
			{atomTest &&
				<Text>Second Atom: {testSecond} -------
				Third Atom: {testThirds}</Text>
			}
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
