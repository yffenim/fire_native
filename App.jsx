import 'react-native-gesture-handler'; // test out this at a dif pos
import * as React from "react";
import { AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider, extendTheme, Center, Divider } from "native-base";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { defaultTheme } from "./src/styles/nativeBaseStyles";
import { navStyles } from "./src/styles/styles";
import { 
  LandingNavigator, 
  UserNavigator, 
  AddDataNavigator,
  AlertnessNavigator,
  SecondsNavigator,
  ThirdsNavigator,
  ExportNavigator,
  FirstNavigator
} from './src/containers/NavigationScreens'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import l from "./helpers/consolelog";

// this has to be turned off for web dev use
import { LogBox } from 'react-native';
// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);
//Ignore all log notifications
LogBox.ignoreAllLogs(true);


export default class App extends React.Component {
  render() {

    const Drawer = createDrawerNavigator();
    return (
    <RecoilRoot>
      <NativeBaseProvider theme={defaultTheme}>
        <NavigationContainer>
          <Drawer.Navigator 
            initialRouteName="Landing"
            screenOptions={navStyles}>
          {/* Screens are imported as constants because the Navigator can only contain preset components as its direct children */}
            {LandingNavigator}
            {AddDataNavigator}
            {UserNavigator}
            {ExportNavigator}
            {AlertnessNavigator}
            {SecondsNavigator}
            {ThirdsNavigator}
            {FirstNavigator}
            {/*
            Add Toggle Dark Mode Here?
            Add Export Data Here?
            */}
          </Drawer.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </RecoilRoot>
    );
  }
}


AppRegistry.registerComponent("Fire", () => App);
