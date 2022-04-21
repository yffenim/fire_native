import * as React from "react";
import { AppRegistry } from "react-native";
// Navigation and Screens (instead of routing)
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, extendTheme } from "native-base";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Load Navigation Stack
import { 
  LandingNavigator, 
  DashboardNavigator, 
  DataNavigator,
  HomeNavigator, 
  UserNavigator } from './src/navigations/NavigationTabScreen'


export default class App extends React.Component {
  render() {
    // set default theme to dark
    const config = {
      useSystemColorMode: false,
      initialColorMode: "dark",
    };
    // extend the theme
    const customTheme = extendTheme({ config });
    // Create Tab Object for Navigator
     const Tab = createBottomTabNavigator();

    return (
      <NativeBaseProvider theme={customTheme}>
        <NavigationContainer>
          <Tab.Navigator>
          {/* Screens are imported as constants because the Navigator can only contain preset components as its direct children */}
            {LandingNavigator}
            {HomeNavigator}
            {UserNavigator}
            {DataNavigator}
          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}


AppRegistry.registerComponent("Fire", () => App);
