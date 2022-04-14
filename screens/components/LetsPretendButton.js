import React from "react";
import { Button } from 'native-base';

function LetsPretendButton() {
  return(
    <Button
      mt="2"
      colorScheme="gray"
      variant="outline"
      onPress={() => {
        // l("Login Pressed!");
        // navigation.navigate("Login");
       }}
     >
      But for now: Let's Pretend To Sign In
    </Button>
    )
  }

export default LetsPretendButton;

