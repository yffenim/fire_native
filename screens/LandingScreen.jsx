import React, { useState } from "react";
import { Center, StorageManager, ColorMode, VStack } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import components or helpers
import ToggleDarkMode from "../src/components/ToggleDarkMode"
// import { CurrentWipButton } from "../src/components/AuthButtons";
import WelcomeLine from "../src/components/WelcomeLine";
import Login from "../src/components/Login";
import Register from "../src/components/Register";


export default function LandingScreen({ navigation }) {
  const [ auth, setAuth ] = useState("login");

  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
     >
      <WelcomeLine />
      {auth === 'login' ?
        <Login setAuth={setAuth}/> :
      auth === 'register' ?
        <Register setAuth={setAuth} /> :
      null}
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
