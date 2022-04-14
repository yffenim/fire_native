import React from "react";
import {
  VStack,
  HStack,
  Center,
  Text,
  Box,
  Button,
  NativeBaseProvider,
  Heading,
  FormControl,
  Input,
  Link,
} from "native-base";

function DataScreen({ navigation }) {
  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <Box safeArea p="2" py="8" w="90%" maxW="290"></Box>
    </Center>
  );
}

export default DataScreen;
