import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LandingScreen from "../../screens/LandingScreen";
import LoginScreen from "../../screens/LoginScreen";
import RegistrationScreen from "../../screens/RegistrationScreen";
import DashboardScreen from "../../screens/DashboardScreen";
import HomeScreen from "../../screens/HomeScreen";
import UserScreen from "../../screens/UserScreen";

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

 export const RegistrationNavigator =
  <Stack.Screen
    name="Registration"
    component={RegistrationScreen}
    options={{ title: "Registrations Screen" }}
	/>;

export const HomeNavigator = 
	<Stack.Screen
    name="Home"
    component={HomeScreen}
    options={{ title: "Home Screen" }}
  />;

 export const UserNavigator =
	<Stack.Screen
    name="User"
    component={UserScreen}
    options={{ title: "User Screen" }}
  />;



