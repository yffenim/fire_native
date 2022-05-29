import React from "react";
import { Button, Link, HStack, Text } from 'native-base';
import { postSignInRequest, postSignUpRequest, validateTokenRequest } from '../functions/AuthApiRequests.jsx'
import API from '../functions/API';
import { headersAtom } from '../atoms/headersAtom';
// import { uidAtom } from '../atoms/uidAtom';
import { userAtom } from '../atoms/userAtom';
import { secondsAtom } from '../atoms/secondsAtom';
import { thirdsAtom } from '../atoms/thirdsAtom';
import { useSetRecoilState, useRecoilState, useRecoilValue } from 'recoil';
import l from '../../helpers/consolelog';

// This Page contains all the Buttons for the Login/Registration/Landing Page
// Including:
// - Sign Up and Sign in Button
// - links to toggle between the two forms
// - Forgot Password? Link << TODO



// REGISTER NEW USER
export const RegisterButton = ({email, password}) => {

  const handleSignUp = () => {
    postSignUpRequest(email, password);   
  };

  return (
    <Button  
      m="10" 
      colorScheme="indigo" 
      onPress={()=>{handleSignUp()}}
    >
      Sign up
    </Button>
  )
}

// SIGN IN USER
export function SignInButton ({email, password, navigation}) {

	// setting atom state with hooks
	const [headers, setHeaders] = useRecoilState(headersAtom);
  const [user, setUser] = useRecoilState(userAtom)
	const [secondsTitle, setSecondsTitle] = useRecoilState(secondsAtom);
	const [thirdsTitle, setThirdsTitle] = useRecoilState(thirdsAtom);

	const usersURL = "http://localhost:3000/api/users/"
	const api = new API;

  const handleSignin = () => {
    const model = "sessions"
    // set login body based on user input
    const body = JSON.stringify({
      email: email,
      password: password  
    })
// Login, save authenticated headers, make a GET request for User Data, store in Atom state
    api.post(model, body)
      .then(headers => {
				setHeaders(headers);
				l("Login callback headers: ", headers);
				// let uid = headers["uid"];
				// setUid(uid);
				navigation.navigate("First");
				// navigation.navigate("Add Entry");
			})
      .catch(error => {
        console.error(error);
		});
// store atom state for User and model titles
		api.get(usersURL)
			.then(response => {
				l(response);
				setUser(response);
				setSecondsTitle(response[1]["secondsTitle"]);
				setThirdsTitle(response[1]["thirdsTitle"]);
			})
			.catch(error => {
				console.error(error);
		});

	};
    return (
      <Button
        onPress={() => {
          handleSignin()
         }
        }
        mt="2" colorScheme="indigo">
          Sign in New
      </Button>
   )
};


// Return to Login component Link (I know it's not a button)
export const BackToLoginLink = ({setForm}) => {
  const handleLink = () => {
    setForm("login");
  }
  return (
    <HStack mt="6" justifyContent="center">
      <Text
        fontSize="sm"
        color="coolGray.600"
        _dark={{
          color: "warmGray.200",
        }}
      >
      Take me back to{" "}
      </Text>
      <Link
        _text={{
        color: "indigo.500",
        fontWeight: "medium",
        fontSize: "sm",
         }}
         onPress={() =>{
          handleLink();
         }}
       >
        Login
      </Link>
    </HStack>
  )
}

// New User Link, also technically not a button..
export const NewUserLink = ({setForm}) => {
// toggle between login and register form
  const handleLink = () => {
    setForm("register");
  }

  return (
    <HStack mt="6" justifyContent="center">
      <Text
        fontSize="sm"
        color="coolGray.600"
        _dark={{
          color: "warmGray.200",
        }}
      >
      I'm a new user.{" "}
      </Text>
      <Link
        _text={{
        color: "indigo.500",
        fontWeight: "medium",
        fontSize: "sm",
         }}
         onPress={() =>{
          handleLink();
         }}
       >
        Sign Up
      </Link>
    </HStack>
  )
}


export const ForgotPasswordLink = ({}) => {
  
  const handleLink = () => {
    // email password to user
  }

  return (
      <Link
        _text={{
        fontSize: "xs",
      	fontWeight: "500",
        color: "indigo.500",
        }}
        alignSelf="flex-end"
        mt="1"
        onPress={()=>{handleLink()}}
      >
      	Forget Password?
      </Link>
  )
}



