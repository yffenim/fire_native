import React from 'react';
import {
	Button,
	Center
} from "native-base";

const l = (arg) => console.log(arg);
const baseURL = "https://limitless-citadel-71686.herokuapp.com/api/alerts/"
// const baseURL = 'http://localhost:3000/api/alerts/';

export default function SubmitButton({level, updateDisplay, buttonText, buttonColor}) {

// TODO: finish Edit
// depending on editMode boolean
// false: POST, no changes to FlatList
// true: PATCH, make FlatList Item into "Selected"

	const postApiCall = () => {
		l("Sending a POST request to server...");
		fetch(baseURL, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"X-Requested-With": "XMLHttpRequest"
				},
			body: JSON.stringify({
				alert: {
					level: level,
					user_id: 1
					},
				}),
			})
		.then((response) => {
			if (response.ok) {
				alert("Level Successfully Submitted!");
				updateDisplay();
				return response.json();
			}
				alert("Oops, something went wrong!")
			throw new Error("Network response was not ok.");
		})
		.catch((err) => l(err));
	};


	return (
		<Center>
			<Button size="xs" w="100" colorScheme={buttonColor}
				onPress={postApiCall}
			>{buttonText}</Button>
 	</Center>
	)
}
