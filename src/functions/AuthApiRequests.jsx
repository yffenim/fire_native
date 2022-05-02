import React from "react";
import l from "../../helpers/consolelog";
import { ToastBox } from '../presentations/ToastBox';
import AsyncStorage from "@react-native-async-storage/async-storage";



// ALL API CALLS FOR USER  AUTHENTICATION / REGISTRATION

// API ENDPOINTS:
// LOGIN USER
// const loginURL = "https://limitless-citadel-71686.herokuapp.com/auth/sign_in"
const loginURL = 'http://localhost:3000/auth/sign_in';

// REGUSTER NEW USER
// const signupURL = "https://limitless-citadel-71686.herokuapp.com/auth"
const signupURL = 'http://localhost:3000/auth';

// Authenticate the new token
const validateURL = 'http://localhost:3000/auth/validate_token'
// const authURL = 'https://limitless-citadel-71686.herokuapp.com/auth/validate_token'

// API endpoint user
// const userURL = "https://limitless-citadel-71686.herokuapp.com/api/users/"
// const userURL = "https://localhost:3000/api/users/"

// refactored logic, to be moved
const loginRequestHeader = {
	"Content-Type": "application/json",
	"X-Requested-With": "XMLHttpRequest"
};

// var token = "";
// var uid = "ada@ardour.com"; // should always be email of user
// var tokenType = "Bearer";
// var client = ""
// var expiry = ""

export const setTokenHeaders = (client, expiry, token, tokenType, uid) => {
	return ({ 
		"client": client,
		"expiry": expiry,
		"access-token": token,
		"token-type": tokenType,
		"uid": uid
	})
}

// l("authenticatedHeaders: ", authenticatedHeaders);

export const validateTokenRequest = (tokenHeaders) => {
	l("sending token validation request");
	
	const testHeaders = {
		"client": "Pq9G32givfpB52n6yHNtCw",
		"expiry": "1652673036",
		"access-token": "_Q41bQcjloF9eAwrhXmDIw",
		"token-type": "Bearer",
		"uid": "ada@ardour.com"
	}

	l("headers sent:", testHeaders);

	fetch(validateURL, {
			method: 'GET',
			headers: testHeaders
	})
	.then((response) => {
		if (response.ok) {
			l("success? ", response.body["success"]);
			l("body: ", response.body);
			return response.json();
		}
		alert("Token Validation Request failed");
		throw new Error("Network response was not ok from token validation.");
	})
	.catch((err) => l(err));
}



// POST REQUEST FOR SIGN IN USER
export const postSignInRequest = () =>  {

// get the access token then save it into AsyncStorage
	// var token = "";
	// const storeToken = async (token) => {
    // await AsyncStorage.setItem('access-token', token);
    // const value = await AsyncStorage.getItem('access-token');
    // console.log("Access-Token from AsyncStorage: ", value);
  // };

		l("From AuthApiRequests: Authenticating user...");
		fetch(loginURL, {
			method: 'POST',
			headers: loginRequestHeader,
			body: JSON.stringify({
				email: "ada@ardour.com",
				password: "password",
			}),
		})
		.then((response) => {
			if (response.ok) {
				// alert("Login Successful!");
				// l("headers: ", response.headers);
				
				let expiry = response.headers["map"]["expiry"];
				let client = response.headers["map"]["client"];
				let token = response.headers["map"]["access-token"];
				let tokenType = response.headers["map"]["token-type"];
				let uid = response.headers["map"]["uid"];

				let tokenHeaders = setTokenHeaders(client, expiry, token, tokenType, uid);
				l("tokenHeaders: ", tokenHeaders);
				validateTokenRequest(tokenHeaders);
				// l("token: ", response.headers["map"]["access-token"]);
				// const getToken = response.headers["map"]["access-token"];
				// storeToken(getToken);
				return response.json();
			}
				alert("Oops, could not login.")
				throw new Error("Network response was not ok from Login request.");
		})
		.then((response) => {
			// getEntries();
		})
		.catch((err) => l(err));



	};

// POST REQUEST FOR REGISTERING NEW USER
export const postSignUpRequest = (email, password) =>  {

		l(`Authenticating ${email} and ${password}`);
		fetch(signupURL, {
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
				alert("Login Successful!");
				return response.json();
			}
				alert("Oops, could not login.")
			throw new Error("Network response was not oki from Registration request..");
		})
		.then((response) => {
			l(response);
		})
		.catch((err) => l(err));
	};

