import React from "react";
import { Button } from 'native-base';


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

