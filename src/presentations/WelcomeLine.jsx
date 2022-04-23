import React from "react";
import { HStack, Heading } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";

const WelcomeLine = () => {
  return (
  <HStack space={2} alignItems="center">
  	<Heading size="lg">Welcome to Fire</Heading>
    <FontAwesome5 name="fire" size={24} color="red" />
  </HStack>
  )
}
export default WelcomeLine;
