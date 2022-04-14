import React from "react";
import { Button } from 'native-base';


function GoToLoginButton( {navigation} ) {
  return(
    <Button
      shadow={2}
      colorScheme="indigo"
      onPress={() => {
        // l("Login Pressed!");
        navigation.navigate("Login");
       }}
     >
      Sign in or Sign up!
    </Button>
    )
  }

export default GoToLoginButton;

