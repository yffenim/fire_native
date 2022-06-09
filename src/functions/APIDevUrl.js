// API ENDPOINTS

// const local = true;
const local = false;

var base = "";
var user = "";
var login = "";
var logout = "";
var register = "";


// switch between local or cloud
if ( local ) { 
	base = "http://localhost:3000/api/";
	user = "http://localhost:3000/api/users/";
	register = "http://localhost:3000/auth/";
	login = "http://localhost:3000/auth/sign_in";
	logout = "http://localhost:3000/auth/sign_out";
} else {
	base = "https://limitless-citadel-71686.herokuapp.com/api/";	
	user = "https://limitless-citadel-71686.herokuapp.com/api/users/";
	register = "https://limitless-citadel-71686.herokuapp.com/auth/";
	login = "https://limitless-citadel-71686.herokuapp.com/auth/sign_in";
	logout = "https://limitless-citadel-71686.herokuapp.com/auth/sign_out";
};


export const baseURL = base;
export const userURL = user;
export const loginURL = login;
export const logoutURL = logout;
export const registerURL = register;
