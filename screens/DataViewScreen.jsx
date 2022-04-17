import React from "react";
import { Center, Box } from "native-base";

function DataViewScreen({ navigation }) {
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

export default DataViewScreen;
