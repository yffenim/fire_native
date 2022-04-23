import * as React from "react";
import { AppRegistry } from "react-native";
// Navigation and Screens (instead of routing)
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, extendTheme } from "native-base";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { defaultTheme } from "./src/styles/styles";

import { 
  LandingNavigator, 
  UserNavigator, 
  AddDataNavigator,
  SummyarNavigator, 
  ExportNavigator } from './src/containers/NavigationTabScreen'
import l from "./helpers/consolelog";

export default class App extends React.Component {
  render() {

    // Create Tab Object for Navigator
    const Tab = createBottomTabNavigator();

    return (
      <NativeBaseProvider theme={defaultTheme}>
        <NavigationContainer>
          <Tab.Navigator>
          {/* Screens are imported as constants because the Navigator can only contain preset components as its direct children */}
            {LandingNavigator}
            {UserNavigator}
            {AddDataNavigator}
            
            {/*
            {SummaryNavigator}
            {ExportNavigator}
            */}
          </Tab.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}


AppRegistry.registerComponent("Fire", () => App);
