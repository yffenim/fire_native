import React from "react";
import { Button, Link, HStack, Text } from 'native-base';
import { postSignInRequest, postSignUpRequest } from '../api/AuthApiRequests.jsx'
import l from '../../helpers/consolelog';

// Register New User Button
export const RegisterButton = ({email, password}) => {
  const handleSignUp = () => {
    // make API call with: email, password, confirm password
    // these are passed in as props from parent Register Form
    postSignUpRequest(email, password);   
  };

  return (
    <Button 
      m="5" 
      colorScheme="indigo" 
      onPress={()=>{handleSignUp()}}
    >
      Sign up
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


// Sign In Button -- currently goes to Home Screen
export const SignInButton = () => {

	const postApiCall = async () => {
    await postSignInRequest();
	};

	const handleLogin = () => {
    postApiCall();
    getApiCall();
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


