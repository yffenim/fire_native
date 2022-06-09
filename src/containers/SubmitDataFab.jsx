import React from 'react';
import { Box, Fab } from 'native-base';
import { headersAtom } from '../atoms/headersAtom';
import { userAtom } from '../atoms/userAtom';
import { Entypo } from '@expo/vector-icons';
import { useRecoilValue } from 'recoil';
import API from '../functions/APImodels';
import l from "../../helpers/consolelog";

// TODO: is UID needed for this?

// Submit FAB (ADD ENTRY SCREEN)
export function SubmitDataFab({firstValue, secondValue, thirdValue, secondsTitle, thirdsTitle}) {
	const api = new API;
	const headers = useRecoilValue(headersAtom);
	const userData = useRecoilValue(userAtom);

	const handleFab = () => {
		if (firstValue !== null) {
			constructAlertRequest();
		};
		if (secondValue !== null) {
			constructSecondRequest();
		};
		if (thirdValue !== null) {
			constructThirdRequest();
		};
	};



	// url endpoint, header, body has model name, title, alert level, uid
	// 
	const constructAlertRequest = () => {
		let model = "alerts";
		let uid = userData[0]["id"];
		let body = JSON.stringify({
      alert: {
				level: firstValue,
				user_id: uid,
				title: "alertness"
			},
		});
		api.post(model, body, headers)
			.then(response => {
				alert("Alert successfully submitted!");
			})
			.catch(error => {
				console.error(error);
		});
	};

	const constructSecondRequest = () => {
		let model = "seconds";
		let uid = userData[0]["id"];
		let body = JSON.stringify({
      second: {
				level: secondValue,
				user_id: uid,
				title: secondsTitle
			},
		});
		api.post(model, body, headers)
			.then(response => {
				alert(`${secondsTitle} successfully submitted!`);
			})
			.catch(error => {
				console.error(error);
		});
	};

	const constructThirdRequest = () => {
		let model = "thirds";
		let uid = userData[0]["id"];
		let body = JSON.stringify({
      third: {
				level: thirdValue,
				user_id: uid,
				title: thirdsTitle
			},
		});
		api.post(model, body, headers)
			.then(response => {
				alert(`${thirdsTitle} successfully submitted!`);
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


