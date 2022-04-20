import * as React from "react";
import { AppRegistry } from "react-native";
// Navigation and Screens (instead of routing)
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, extendTheme } from "native-base";
// Load Navigation Stack
import { 
  LandingNavigator, 
  LoginNavigator, 
  DashboardNavigator, 
  RegistrationNavigator,
  HomeNavigator, 
  UserNavigator } from './src/navigations/NavigationScreen'


export default class App extends React.Component {
  render() {
    // set default theme to dark
    const config = {
      useSystemColorMode: false,
      initialColorMode: "dark",
    };
    // extend the theme
    const customTheme = extendTheme({ config });
    // Creat Stack Object for Navigator
    const Stack = createNativeStackNavigator();

    return (
      <NativeBaseProvider theme={customTheme}>
        <NavigationContainer>
          <Stack.Navigator>
            {/* Screens are imported as constants because the Navigator can only contain preset components as its direct children */}
            {LandingNavigator}
            {LoginNavigator}
            {DashboardNavigator}
            {RegistrationNavigator}
            {HomeNavigator}
            {UserNavigator}
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}


AppRegistry.registerComponent("Fire", () => App);
