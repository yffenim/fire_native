import React, { useState, useEffect } from 'react';
import {
  Text,
	Button,
	Center
} from "native-base";

const l = (arg) => console.log(arg);
const baseURL = "https://limitless-citadel-71686.herokuapp.com/api/alerts/"
// const baseURL = 'http://localhost:3000/api/alerts/';

export default function SubmitButton({level}) {
	l(`level state from inside button: ${level}`);
	const postApiCall = () => {
		l("posting...");
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
				alert("Level Successfully Submitted!")
				return response.json();
			}
				alert("Oops, something went wrong!")
			throw new Error("Network response was not ok.");
		})
		.catch((err) => l(err));
	};


	return (
		<Center>
			<Button size="xs" w="100"
				onPress={postApiCall}
				// onPress={onSubmitPress}
		  >SUBMIT ME!</Button>
 		</Center>
	)
}
