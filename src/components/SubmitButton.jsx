import React from 'react';
import {
	Button,
	Center
} from "native-base";
import l from "../../helpers/consolelog";

const baseURL = "https://limitless-citadel-71686.herokuapp.com/api/alerts/"
// const baseURL = 'http://localhost:3000/api/alerts/';

export default function SubmitButton({level, updateDisplay, buttonText, buttonColor, editMode, editId}) {

// TODO: finish Edit
// depending on editMode boolean
// false: POST, no changes to FlatList
// true: PATCH, make FlatList Item into "Selected"
// 	const patchApiCall = () => {
// 		l("Sending a PATCH request to server...");
// 		l("editMode should be true: ", editMode);
// 		l("editId: ", editId);
// }

	const patchApiCall = (id) => {
		l("Sending a PATCH request to server with id: ", id);
    let editURL = baseURL + id
    // console.log(`edit id is: ${id}`);
    console.log(editURL);
    fetch(editURL, {
      method: 'PATCH',
        headers: {
         'Content-Type': 'application/json',
         'X-Requested-With': 'XMLHttpRequest',
        // 'X-CSRF-Token' : token,
      },
      body: JSON.stringify({
        alert: {
          level: level,
          user_id: 1
        }
      })
    })
    .then((response) => {
			if (response.ok) {
				alert("Update Level Successfully Submitted!");
				updateDisplay();
        return response.json();
    }
    throw new Error("Network response was not ok");
    })
  };



	const postApiCall = () =>  {
		l("editMode should be false: ", editMode);
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

	// const handleSubmit = () => { patchApiCall() }
	const handleSubmit = () => {( editMode === true ? patchApiCall(editId) : postApiCall() )};

	return (
		<Center>
			<Button size="xs" w="100" colorScheme={buttonColor}
				onPress={handleSubmit}
			>{buttonText}</Button>
 	</Center>
	)
}
