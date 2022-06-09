import React, { useState } from 'react';
import { Button, Center, useToast } from 'native-base';
import { postSecondTitle, postThirdTitle } from '../functions/TitlesApiRequests';
import { secondsTitleAtom, thirdsTitleAtom } from '../atoms/titlesAtoms';
import { headersAtom } from '../atoms/headersAtom';
import { userAtom } from '../atoms/userAtom';
import { baseURL, userURL } from "../functions/APIDevUrl";
import API from '../functions/APImodels';
import { ToastBox } from '../presentations/ToastBox';
import { timeout } from '../../helpers/delay';
import { useRecoilState, useRecoilValue } from 'recoil';
import l from "../../helpers/consolelog";

// POST / PUT actions for tracking titles vis default system object 
// TODO: get rid of titleAtoms and just pull from userAtom?

export function SubmitTitlesButton({secondsTitle, thirdsTitle,  validate, setSignedIn, firstTime, userData}) {
	const toast = useToast();
	const toastColor = "teal.600";
	const toastError = "Error. Please try again!";
	const toastErrorColor = "secondary.600";
	const api = new API;
	const headers = useRecoilValue(headersAtom);

	// update atom state for titles
	const [secondsTitleHook, setSecondsTitleHook] = useRecoilState(secondsTitleAtom);
	const [thirdsTitleHook, setThirdsTitleHook] = useRecoilState(thirdsTitleAtom);
	const [user, setUser] = useRecoilState(userAtom);
	// get and set user atom and title atoms
  function updateUserAtom() {
    api.get(userURL, headers)
      .then(response => {
        setUser(response);
      })
      .catch(error => {console.error(error)
    })
  };

	// check if this is a first time request 
	const onSavePress = () => {
		if (firstTime) {
			postRequests();
		} 
		else {
			putRequests();
		}
	};

	// Edit model titles if not the first time
	// logic flow: patch req, update titles atoms, navigate 
	// note: not updating userAtom after PUT
	const putRequests = () => {
		l("putRequests");
		if ( secondsTitle ) { putSecond() };
		if ( thirdsTitle ) { putThird() };
	};

	// Create system default objects for models if yes first time
	// logid flow: validate, post req, update titles atom, update userAtom, set first_time, navigate
	const postRequests = () => {
		l("postRequests");
		validate() ? postSecond() : l('Titles are not valid for post');
	};

	///// POST REQUESTS /////
	// Create system default object for Second model
	const postSecond = () => {
		let level = 5;
		let model = "seconds";
		let uid = userData[0]["id"];
		let body = JSON.stringify({
      second: {
				level: level,
				user_id: uid,
				title: secondsTitle
			},
		});
		api.post(model, body, headers)
			.then(response => {
				// alert(`${secondsTitle} successfully submitted!`);
				postThird();
			})
			.catch(error => {
				console.error(error);
		});
	};


	// Create system default object for Third model
	const postThird = () => {
		let level = 5;
		let model = "thirds";
		let uid = userData[0]["id"];
		let toastText = "titles submitted!";

		let body = JSON.stringify({
      third: {
				level: level,
				user_id: uid,
				title: thirdsTitle
			},
		});
		api.post(model, body, headers)
			.then(response => {
				// alert(`${thirdsTitle} successfully submitted!`);
				toast.show({
					render: () => {
						return <ToastBox text={toastText} bg={toastColor} />
					}
				});
				setSecondsTitleHook(secondsTitle);
				setThirdsTitleHook(thirdsTitle);
				updateUserAtom();
				if (firstTime) {setSignedIn(true)};
			})
			.catch(error => {
				console.error(error);
		});
	};


	///// PUT REQUESTS /////
	const putSecond = () => {
		let secondsId = userData[1]["secondsId"];
		let uid = userData[0]["id"];
		let url = baseURL + "seconds/" + secondsId;
		let toastText = `${secondsTitle} updated!`;

		let body = JSON.stringify({
    	second: {
				title: secondsTitle,
        user_id: uid,
        level: 5
			}
		});

		api.patch(url, body, headers)
			.then(response => {
				setSecondsTitleHook(secondsTitle);
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

	// second api call to third model
	const putThird = () => {
		let thirdsId = userData[1]["thirdsId"]
		let uid = userData[0]["id"];
		let url = baseURL + "thirds/" + thirdsId;
		let toastText = `${thirdsTitle} updated!`;

		let body = JSON.stringify({
    	third: {
				title: thirdsTitle,
        user_id: uid,
        level: 5
			}
		});

		api.patch(url, body, headers)
			.then(response => {
				setThirdsTitleHook(thirdsTitle);
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


	return (
		<Center	bg="darkBlue.900">
			<Button w="100"
				variant="outline"
				colorScheme="indigo"
				onPress={()=>{
					onSavePress();
				}}>
				Save Titles
			</Button>
		</Center>		
	)
};



