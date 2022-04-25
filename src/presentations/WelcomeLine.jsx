import React from "react";
import { HStack, Heading } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";

const WelcomeLine = () => {
  return (
  <HStack space={4} mb="10" alignItems="center">
  	<Heading size="xl">Welcome to Fire</Heading>
    <FontAwesome5 name="fire" size={34} color="red" />
  </HStack>
  )
}
export default WelcomeLine;
