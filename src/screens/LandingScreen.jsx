import React, { useState } from "react";
import { Center, StorageManager, ColorMode, VStack } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WelcomeLine from "../presentations/WelcomeLine";
import Login from "../containers/Login";
import Register from "../containers/Register";
import ToggleDarkMode from "../containers/ToggleDarkMode"


// Display Login or Register

export default function LandingScreen({ navigation }) {

// used to toggle login vs register form
  const [ form, setForm ] = useState("login");

  return (
    <Center>
      <WelcomeLine />
      {form === 'login' ?
        <Login setForm={setForm} navigation={navigation}/> :
      form === 'register' ?
        <Register setForm={setForm} /> :
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
