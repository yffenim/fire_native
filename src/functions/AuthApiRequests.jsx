import React from "react";
import { ToastBox } from '../presentations/ToastBox';
import { loginURL, registerURL } from '../functions/APIDevUrl';
import l from "../../helpers/consolelog";



// THIS PAGE CONTAINS ONLY  POST REQUEST FOR REGISTERING NEW USER
export const postSignUpRequest = (email, password, {setForm}) => {
	l(`Signing up a new user for ${email}`);
	
		fetch(registerURL, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"X-Requested-With": "XMLHttpRequest"
				},
			body: JSON.stringify({
				email: email,
				password: password,
				password_confirmation: password,
			}),
		})
		.then((response) => {
			if (response.ok) {
				alert("Account created. Please login!");
				setForm("login");
				return response.json();
			}
				alert("Oops, could not sign up.")
			throw new Error("Network response was not okay from Registration request..");
		})
		.then((response) => {
			l(response);
		})
		.catch((err) => l(err));
	};



{/* OLD / NOT IN USE / OLD */}

// API ENDPOINTS:
// LOGIN USER
// const loginURL = "https://limitless-citadel-71686.herokuapp.com/auth/sign_in"
// const loginURL = 'http://localhost:3000/auth/sign_in';

// REGUSTER NEW USER
// const signupURL = "https://limitless-citadel-71686.herokuapp.com/auth"

// Authenticate the new token
// const validateURL = 'http://localhost:3000/auth/validate_token'
// const authURL = 'https://limitless-citadel-71686.herokuapp.com/auth/validate_token'

// API endpoint user
// const userURL = "https://limitless-citadel-71686.herokuapp.com/api/users/"
// const userURL = "https://localhost:3000/api/users/"

// refactored, to be moved
// const loginRequestHeader = {
// 	"Content-Type": "application/json",
// 	"X-Requested-With": "XMLHttpRequest"
// };

// create header object for authenticated requests
// export const setTokenHeaders = (client, expiry, token, tokenType, uid) => {
// 	return ({ 
// 		"Content-Type": "application/json",
// 		"X-Requested-With": "XMLHttpRequest",
// 		"client": client,
// 		"expiry": expiry,
// 		"access-token": token,
// 		"token-type": tokenType,
// 		"uid": uid
// 	})
// }

// Validate access-token
// Used in callback of postSignInRequest() fetch request
// export const validateTokenRequest = (tokenHeaders) => {
// 	l("sending token validation request with headers: ", tokenHeaders);
// 	fetch(validateURL, {
// 			method: 'GET',
// 			headers: tokenHeaders
// 	})
	// .then((response) => {
	// 	if (response.ok) {
	// 		l("Validate Token Request Success!");
	// 		return response.json();
	// 	}
	// 	alert("Login failed. Please try again!");
	// 	throw new Error("Network response was not ok from token validation.");
	// })
	// .then((response) => {
	// 	l(response.success);
	// })
	// .catch((err) => l(err));
// }



// // POST REQUEST FOR SIGN IN USER
// export const postSignInRequest = () =>  {

// // for passing headers into validateToken request 
// 	var tokenHeaders = {}

// // Store the response headers in Async 
// 	const storeHeaders = async (tokenHeaders) => {
// 		const jsonHeaders = JSON.stringify(tokenHeaders)
// 		await AsyncStorage.setItem('requestHeaders', jsonHeaders);
// 		// const jsonValue = await AsyncStorage.getItem('requestHeaders')
//     // let value = jsonValue != null ? JSON.parse(jsonValue) : null;
//     // l("tokenHeaders from AuthApiRequests: ", value);
// 	}

// 	l("Authenticating user login...");
// 	l("Login request headers: ", loginRequestHeader);
// 		fetch(loginURL, {
// 			method: 'POST',
// 			headers: loginRequestHeader,
// 			body: JSON.stringify({
// 				email: "ada@ardour.com",
// 				password: "password",
// 			}),
// 		})
// 		.then((response) => {
// 			if (response.ok) {
// 				alert("Login Successful!");
// 				// get the header values
// 				let expiry = response.headers["map"]["expiry"];
// 				let client = response.headers["map"]["client"];
// 				let token = response.headers["map"]["access-token"];
// 				let tokenType = response.headers["map"]["token-type"];
// 				let uid = response.headers["map"]["uid"];
// 				// make the header object
// 				tokenHeaders = setTokenHeaders(client, 
// 					expiry, token, tokenType, uid);
// 				// store header into async storage
// 				storeHeaders(tokenHeaders);
// 				return response.json();
// 			}
// 				alert("Oops, could not login.")
// 				throw new Error("Network response was not ok from Login request.");
// 		})
// 		.then((response) => {
// 			// callback to validate the access-token
// 			validateTokenRequest(tokenHeaders);
// 		})
// 		.catch((err) => l(err));
// 	};


