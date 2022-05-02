import React from "react";
import { Button, Link, HStack, Text } from 'native-base';
import { postSignInRequest, postSignUpRequest, validateTokenRequest } from '../functions/AuthApiRequests.jsx'
import l from '../../helpers/consolelog';

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
export const SignInButton = () => {

	const postApiCall = async () => {
    await validateTokenRequest();
    // await postSignInRequest();
	};

	const handleLogin = () => {
    postApiCall();
  };

  return(
    <Button
      onPress={() => {
        handleLogin()
        }
      }
      mt="2" colorScheme="indigo">
        Sign in
    </Button>
  )
}



// Return to Login component Link (I know it's not a button)
export const BackToLoginLink = ({setAuth}) => {
  const handleLink = () => {
    setAuth("login");
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
export const NewUserLink = ({setAuth}) => {
// toggle between login and register form
  const handleLink = () => {
    setAuth("register");
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



// not currently in use

export const CurrentWipButton = (props) => {
  return(
    <Button
      mt="2"
      colorScheme="gray"
      variant="outline"
      onPress={() => {
        props.navigation.navigate("Home",)}
      }
     >
      Current WIP
    </Button>
    )
  }

export const LoginButton = (props) => {
  return(
    <Button
      shadow={2}
      colorScheme="indigo"
      onPress={() => {
        props.navigation.navigate("Login");
       }}
     >
      Sign in or Sign up!
    </Button>
    )
  }

export const LetsPretendButton = (props) => {
  return(
    <Button
      mt="2"
      colorScheme="gray"
      variant="outline"
      onPress={() => {
        props.navigation.navigate("Dashboard",
          { nameParam: { "name": "default" } }
        )}
      }
     >
      But for now: Let's Pretend To Sign In
    </Button>
    )
  }


