import React from 'react';
import { Box, Heading, Text, Button, Pressable, Fab, Center } from 'native-base';
import { postMomentRequest } from '../functions/MomentsApiRequests';
import { postSecondRequest } from '../functions/SecondsApiRequests';
import { postThirdRequest } from '../functions/ThirdsApiRequests';
import { postSecondTitle, postThirdTitle } from '../functions/TitlesApiRequests';
import l from "../../helpers/consolelog";
import { secondsAtom } from '../atoms/secondsAtom';
import { thirdsAtom } from '../atoms/thirdsAtom';
import { userAtom } from '../atoms/userAtom';
import { useRecoilState } from 'recoil';
import { useRecoilValue } from 'recoil';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const momentsURL = "https://limitless-citadel-71686.herokuapp.com/api/alerts/"


// ADD TITLES FOR FIRST TIME SCREEN 
export function SubmitTitlesButton({secondsTitle, thirdsTitle, navigation}) {
	const [secondsHook, setSecondsHook ] = useRecoilState(secondsAtom);
	const [thirdsHook, setThirdsHook] = useRecoilState(thirdsAtom);

	// get OIDS of the default model objects to change the title of object
	const userData = useRecoilValue(userAtom);
  const secondId = userData[1]["secondId"];
  const thirdId = userData[1]["thirdId"];

	const handleTitleSubmit = async () => {
		putSecond();
		putThird();
		setSecondsHook(secondsTitle);
		setThirdsHook(thirdsTitle);
		navigation.navigate("Add Data");
	};

	const putSecond = async () => {
		await postSecondTitle(secondsTitle, secondId);
	};

	const putThird = async () => {
		await postThirdTitle(thirdsTitle, thirdId)
	};

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
