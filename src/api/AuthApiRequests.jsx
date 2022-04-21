import React from "react";
import l from "../../helpers/consolelog";

// ALL API CALLS FOR USER  AUTHENTICATION / REGISTRATION

// API ENDPOINTS:
// LOGIN USER
// const loginURL = "https://limitless-citadel-71686.herokuapp.com/auth/sign_in"
const loginURL = 'http://localhost:3000/auth/sign_in';

// REGUSTER NEW USER
// const signupURL = "https://limitless-citadel-71686.herokuapp.com/auth"
const signupURL = 'http://localhost:3000/auth';


// API endpoint user
const userURL = "https://limitless-citadel-71686.herokuapp.com/api/users/"
// const userURL = "https://localhost:3000/api/users/"


// POST REQUEST FOR SIGN IN
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
			throw new Error("Network response was not ok.");
		})
		.then((response) => {
			l(response);
		})
		.catch((err) => l(err));
	};


// POST REQUEST FOR SIGN IN
export const postSignInRequest = () =>  {
// need to get the access token then save it into context

		l("Authenticating user...");
		fetch(loginURL, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				"X-Requested-With": "XMLHttpRequest"
				},
			body: JSON.stringify({
				email: "Ada@ardour.com",
				password: "danascully",
			}),
		})
		.then((response) => {
			if (response.ok) {
				alert("Login Successful!");
				l("headers: ", response.headers);
				l("token: ", response.headers["map"]["access-token"]);
				return response.json();
			}
				alert("Oops, could not login.")
			throw new Error("Network response was not ok.");
		})
		// .then((response) => {l(response)})
		.catch((err) => l(err));
	};


