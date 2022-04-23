import 'react-native-gesture-handler'; // test out this at a dif pos
import * as React from "react";
import { AppRegistry } from "react-native";
// Navigation and Screens (instead of routing)
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, extendTheme } from "native-base";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { defaultTheme } from "./src/styles/styles";

import { 
  LandingNavigator, 
  UserNavigator, 
  AddDataNavigator
  } from './src/containers/NavigationScreens'
import l from "./helpers/consolelog";

export default class App extends React.Component {
  render() {

    // Create Tab Object for Navigator
    // const Tab = createBottomTabNavigator();
    
    const Drawer = createDrawerNavigator();

    return (
      <NativeBaseProvider theme={defaultTheme}>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Landing">
          {/* Screens are imported as constants because the Navigator can only contain preset components as its direct children */}
            {LandingNavigator}
            {UserNavigator}
            {AddDataNavigator}
            
            {/*
            {SummaryNavigator}
            {ExportNavigator}
            */}
          </Drawer.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}


AppRegistry.registerComponent("Fire", () => App);
