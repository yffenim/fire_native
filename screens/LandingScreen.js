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
import { FontAwesome5 } from '@expo/vector-icons'; 
import AsyncStorage from "@react-native-async-storage/async-storage";

// Define the config so we can specify using dark mode by default
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark", // why is this not working?
  // dependencies: { 'linear-gradient': require('expo-linear-gradient').LinearGradient }
};

// shortened expression for loggin
const l = (arg) => console.log(arg)

// extend the theme to customize
export const theme = extendTheme({ config });

// component function
export default function LandingScreen( {navigation} ) {
  return (
    <NativeBaseProvider colorModemanager={colorModeManager}>
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

        <ToggleDarkMode />
        </VStack>
      </Center>
    </NativeBaseProvider>
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
