import React, { useState } from "react";
import {
  VStack,
  HStack,
  Center,
  Text,
  Box,
  Button,
  Heading,
  FormControl,
  Input,
  Link,
} from "native-base";


function UserScreen({navigation }) {

  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
    flex={1}>
    <Text>USER SCREEN</Text>
    </Center>
  );
}

export default UserScreen;
