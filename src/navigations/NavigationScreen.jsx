import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "../../screens/LandingScreen";
import LoginScreen from "../../screens/LoginScreen";
import DataScreen from "../../screens/DataScreen";
import DashboardScreen from "../../screens/DashboardScreen";

// options
// https://reactnavigation.org/docs/stack-navigator/#options

const Stack = createNativeStackNavigator();


export const LandingNavigator = 
  <Stack.Screen
    name="Landing" // name can now be used in nav methods
    component={LandingScreen} 
    options={{ title: "Landing Screen" }}
	/>;

export const LoginNavigator = 
	<Stack.Screen
  	name="Login"
    component={LoginScreen}
    options={{ title: "Login Screen" }}
	/>;

export const DashboardNavigator =
  <Stack.Screen
    name="Dashboard"
    component={DashboardScreen}
    options={{ title: "Dashboard Screen" }}
	/>;

export const DataNavigator = 
	<Stack.Screen
    name="Data"
    component={DataScreen}
    options={{ title: "Data Screen" }}
  />;


