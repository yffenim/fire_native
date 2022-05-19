import React from 'react';
import { Box, Heading, Text, Button, Pressable } from 'native-base';
import { postMomentRequest } from '../functions/MomentsApiRequests';
import { postSecondRequest, postThirdRequest } from '../functions/TitlesApiRequests';
import l from "../../helpers/consolelog";
import { secondsAtom } from '../atoms/secondsAtom';
import { thirdsAtom } from '../atoms/thirdsAtom';
import { useRecoilValue, useSetRecoilState } from 'recoil'

const momentsURL = "https://limitless-citadel-71686.herokuapp.com/api/alerts/"


// Submit for MOMENTS
export function SubmitButton() {
	const postApiCall = async () => {
    await postMomentRequest(5);
	}

	return (
		<Box mt="5" w="300">
			<Button onPress={()=>{postApiCall()}}>
				Save My Data!
			</Button>
		</Box>		
	)
}

export function SubmitTitles({secondsTitle, thirdsTitle}) {
	const setSecondsAtom = useSetRecoilState(secondsAtom);
	const setThirdsAtom = useSetRecoilState(thirdsAtom);
	const testSecond = useRecoilValue(secondsAtom);
	const testThirds = useRecoilValue(thirdsAtom);
	// const atomTest = true;
	const atomTest = false;

	const handleTitleSubmit = async () => {
		await postSecondRequest(secondsTitle);
		await postThirdRequest(thirdsTitle)
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
		<Box mt="5" w="300">
			<Button 
				onPress={()=>{
					handleTitleSubmit()

					// onSubmit();
				}}>
				Save My Data!
			</Button>
			{atomTest &&
				<Text>Second Atom: {testSecond} -------
				Third Atom: {testThirds}</Text>
			}
		</Box>		
	)
}


