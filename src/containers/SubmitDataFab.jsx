import React from 'react';
import { Box, Fab, useToast } from 'native-base';
import { ToastBox } from '../presentations/ToastBox';
import { headersAtom } from '../atoms/headersAtom';
import { userAtom } from '../atoms/userAtom';
import { timeout } from '../../helpers/delay';
import { Entypo } from '@expo/vector-icons';
import { useRecoilValue } from 'recoil';
import API from '../functions/APImodels';
import l from "../../helpers/consolelog";


// Submit FAB (ADD ENTRY SCREEN)
export function SubmitDataFab({
	firstValue, 
	setFirstValue,
	secondValue, 
	setSecondValue,
	thirdValue, 
	setThirdValue,
	secondsTitle, 
	thirdsTitle}) {

	const toast = useToast();
	const api = new API;
	const headers = useRecoilValue(headersAtom);
	const userData = useRecoilValue(userAtom);
	const uid = userData[0]["id"];
	const email = userData[0]["email"];

	const handleFab = async () => {
		if (firstValue !== null) {
			constructAlertRequest();
		};
		await timeout(1000);
		if (secondValue !== null) {
			constructSecondRequest();
		};
		await timeout(1000);
		if (thirdValue !== null) {
			constructThirdRequest();
		};
	};


	// url endpoint, header, body has model name, title, alert level, uid
	const constructAlertRequest = () => {
		let model = "alerts";
		let toastColor = "secondary.600";
		let toastError = "Error. Please try again!";
		let toastErrorColor = "teal.600";
		let toastText = "alert created!";
		// let uid = userData[0]["id"];
		let body = JSON.stringify({
      alert: {
				level: firstValue,
				user_id: uid,
				title: "alertness"
			},
		});
		l(`Submitting ${model} level ${firstValue} for user ${email}`);

		api.post(model, body, headers)
			.then(response => {
				l("response: ", response);
				setFirstValue(null);
 				toast.show({
					render: () => {
						return <ToastBox text={toastText} bg={toastColor} />
					}
				});
			})
			.catch(error => {
				toast.show({
					render: () => {
						return <ToastBox text={toastError} bg={toastErrorColor} />
					}
				});
				console.error(error);
		});
	};

	const constructSecondRequest = () => {
		let model = "seconds";
		let uid = userData[0]["id"];
		let toastColor = "secondary.600";
		let toastText = `${secondsTitle} created!`;

		let body = JSON.stringify({
      second: {
				level: secondValue,
				user_id: uid,
				title: secondsTitle
			},
		});
		// l(`Submitting ${model} level ${firstValue} for user ${email}`);

		api.post(model, body, headers)
			.then(response => {
				setSecondValue(null);
				toast.show({
					render: () => {
						return <ToastBox text={toastText} bg={toastColor} />
					}
				});
			})
			.catch(error => {
				console.error(error);
		});
	};

	const constructThirdRequest = () => {
		let model = "thirds";
		let uid = userData[0]["id"];
		let toastColor = "secondary.600";
		let toastText = `${thirdsTitle} created!`;
		let body = JSON.stringify({
      third: {
				level: thirdValue,
				user_id: uid,
				title: thirdsTitle
			},
		});
		// l(`Submitting ${model} level ${firstValue} for user ${email}`);

		api.post(model, body, headers)
			.then(response => {
				setThirdValue(null);
				toast.show({
					render: () => {
						return <ToastBox text={toastText} bg={toastColor} />
					}
				});
			})
			.catch(error => {
				console.error(error);
		});
	};

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


