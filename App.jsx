import 'react-native-gesture-handler'; // test out this at a dif pos
import * as React from "react";
import { AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, extendTheme, Center } from "native-base";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { defaultTheme } from "./src/styles/nativeBaseStyles";
import { navStyles } from "./src/styles/styles";
import { 
  LandingNavigator, 
  UserNavigator, 
  AddDataNavigator,
  SummaryNavigator,
  ExportNavigator
  } from './src/containers/NavigationScreens'
import l from "./helpers/consolelog";

import { LogBox } from 'react-native';
// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);
//Ignore all log notifications
LogBox.ignoreAllLogs();


export default class App extends React.Component {
  render() {

    const Drawer = createDrawerNavigator();
    return (
      <NativeBaseProvider theme={defaultTheme}>
        <NavigationContainer>
          <Drawer.Navigator 
            initialRouteName="Landing"
    
            screenOptions={navStyles}>
          {/* Screens are imported as constants because the Navigator can only contain preset components as its direct children */}
            {LandingNavigator}
            {UserNavigator}
            {AddDataNavigator}
            
            {SummaryNavigator}
            {ExportNavigator}
            {/*
            Add Toggle Dark Mode Here?
            Add Export Data Here?
            */}
          </Drawer.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}


AppRegistry.registerComponent("Fire", () => App);
