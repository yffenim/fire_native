import React from 'react';
import { Box, Fab } from 'native-base';
import { postMomentRequest } from '../functions/MomentsApiRequests';
import { postSecondRequest } from '../functions/SecondsApiRequests';
import { postThirdRequest } from '../functions/ThirdsApiRequests';
import { useRecoilValue } from 'recoil';
import { Entypo } from '@expo/vector-icons';
import l from "../../helpers/consolelog";

const momentsURL = "https://limitless-citadel-71686.herokuapp.com/api/alerts/"


// Submit FAB (ADD ENTRY SCREEN)
export function SubmitDataFab({firstValue, secondValue, thirdValue}) {
	var submitFirstTitle = "alertness"

	const handleFab = () => {
		if (firstValue !== null) {
			postAlert();
		};
		if (secondValue !== null) {
			postSecond();
		};
		if (thirdValue !== null) {
			postThird();
		};
	};

	const postAlert = async () => {
		await postMomentRequest(firstValue);
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


