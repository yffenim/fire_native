import React from "react";
import { Button, Link, HStack, Text } from 'native-base';
import { postSignInRequest, postSignUpRequest, validateTokenRequest } from '../functions/AuthApiRequests.jsx'
import l from '../../helpers/consolelog';
import API from '../functions/API';
import { headersAtom } from '../atoms/headersAtom';
import { useSetRecoilState, useRecoilState } from 'recoil';

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
// export const SignInButton = ({email, password}) => {
export function SignInButton ({email, password, setHeaders}) {
  const api = new API;
  const handleSignin = () => {
    const model = "sessions"
  
    // set login body based on user input
    const body = JSON.stringify({
      email: email,
      password: password  
    })

    api.post( model, body)
      .then(headers => {
        setHeaders(headers);
        l("return in callback should be headers: ", headers);
      })
      .catch(error => {
        console.error(error);
      });
    }
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
}


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



