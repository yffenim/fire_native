import React from 'react';
import {
  Text,
  Box,
  Button,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  StorageManager,
  ColorMode,
  VStack,
  Code,
  Icon,
} from "native-base";
import { StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; 
import AsyncStorage from "@react-native-async-storage/async-storage";


// shortened expression for loggin
const l = (arg) => console.log(arg)


// component function
export default function LandingScreen( {navigation} ) {
  return (
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >

      <VStack space={5} alignItems="center">
        <HStack space={2} alignItems="center">
          <Heading size="lg">Welcome to Fire</Heading>
          <FontAwesome5 name="fire" size={24} color="red" />
        </HStack>
        
        <Button 
          shadow={2}
          colorScheme="indigo"
          onPress={() => {
            l("Login Pressed!")
            navigation.navigate('Login')}
            }
        >
          Sign in or Sign up!
        </Button>

          <Button 
            mt="2" 
            colorScheme="gray" 
            variant="outline"
            onPress={() => {navigation.navigate('Home')}
            }
          >
            But for now: Let's Pretend To Sign In
          </Button>

        <ToggleDarkMode />
        </VStack>
      </Center>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        colorScheme="indigo"
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
// User StorageManager to persist the color mode selection even when app is refreshed
// why is this also not working 
const colorModeManager: StorageManager = {
  get: async () => {
    try {
      let val = await AsyncStorage.getItem("@color-mode");
      return val === "dark" ? "dark" : "light";
    } catch (e) {
      return "light";
    }
  },
  set: async (value: ColorMode) => {
    try {
      await AsyncStorage.setItem("@color-mode", value);
    } catch (e) {
      l(e);
    }
  },
};



