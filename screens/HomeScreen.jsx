import React, { useRef, useState, useEffect } from "react";
import { VStack, Center, Text, Box, Button } from "native-base";
import l from "../helpers/consolelog.js";
import { postRequest } from '../src/api/ApiRequests.jsx';

// import CircularSlider from 'react-native-circular-slider';

// This Component contains:
// - circular input 
// - submit button for input
// - display current input value
// - undo without 10 seconds
//

// function HomeScreen({ navigation }) {
//   const [value, setValue] = useState(0.25)

//   return (
//     <Center
//       _dark={{ bg: "blueGray.900" }}
//       _light={{ bg: "blueGray.50" }}
//       px={4}
//       flex={1}
//     >
//       <Box safeArea p="2" py="8" w="90%" maxW="290">Text from HomeScreen</Box>
//     </Center>
//   );
// }

// export default HomeScreen;


function HomeScreen ({navigation}) {
  return (
      <Text>Home Screen</Text>
    )
}

export default HomeScreen
