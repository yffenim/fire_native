import React from "react";
import { Button, Link, HStack, Text } from 'native-base';
import l from '../../helpers/consolelog';

// Register New User Button
export const RegisterButton = () => {
  return (
    <Button colorScheme="indigo">
      Sign up
    </Button>
  )
}

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

// New User Link, technically not a button..
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
export const SignInButton = ({navigation}) => {
  return(
    <Button
      onPress={() => {
      navigation.navigate("Home",
        // { nameParam: {name} }
        )}
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


