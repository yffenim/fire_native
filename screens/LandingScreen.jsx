import React from "react";
import { Center, StorageManager, ColorMode, VStack } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import components or helpers
import ToggleDarkMode from "../src/components/ToggleDarkMode"
import { LoginButton, LetsPretendButton, CurrentWipButton } from "../src/components/LoginButtons";
import WelcomeLine from "../src/components/WelcomeLine";

export default function LandingScreen({ navigation }) {

  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
     >
      <VStack space={5} alignItems="center">
        <WelcomeLine />
        <LoginButton navigation={navigation} />
        <CurrentWipButton navigation={navigation} />
        <LetsPretendButton navigation={navigation} />
        <ToggleDarkMode />
      </VStack>
    </Center>
  );
}


//  StorageManager will persist the color mode selection even when app is refreshed
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
