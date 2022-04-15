import * as React from "react";
import { AppRegistry } from "react-native";
// Navigation and Screens (instead of routing)
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider, extendTheme } from "native-base";
// load all screens
import LandingScreen from "./screens/LandingScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import DataScreen from "./screens/DataScreen";
import DashboardScreen from "./screens/DashboardScreen";

// in lieu of routing, we have a navigator to handle movement between screens

const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  render() {
    // set default theme to dark
    const config = {
      useSystemColorMode: false,
      initialColorMode: "dark",
    };
    // extend the theme
    const customTheme = extendTheme({ config });
    
    return (
      <NativeBaseProvider theme={customTheme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Landing" // name can now be used in nav methods
              component={LandingScreen} 
              options={{ title: "Landing Screen" }}
            />
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ title: "Login Screen" }}
            />
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={{ title: "Register Screen" }}
            />
            <Stack.Screen
              name="Dashboard"
              par="test"
              component={DashboardScreen}
              options={{ title: "Dashboard Screen" }}
            />
            <Stack.Screen
              name="Data"
              component={DataScreen}
              options={{ title: "Data Screen" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    );
  }
}


AppRegistry.registerComponent("Fire", () => App);
