import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LandingScreen from "../../screens/LandingScreen";
import LoginScreen from "../../screens/LoginScreen";
import RegistrationScreen from "../../screens/RegistrationScreen";
import DashboardScreen from "../../screens/DashboardScreen";
import HomeScreen from "../../screens/HomeScreen";
import UserScreen from "../../screens/UserScreen";

// https://reactnavigation.org/docs/tab-based-navigation

const Tab = createBottomTabNavigator();

export const LandingNavigator = 
  <Tab.Screen
    name="Landing" // name can now be used in nav methods
    component={LandingScreen} 
    options={{ title: "Landing Screen" }}
	/>;

export const LoginNavigator = 
	<Tab.Screen
  	name="Login"
    component={LoginScreen}
    options={{ title: "Login Screen" }}
	/>;

export const DashboardNavigator =
  <Tab.Screen
    name="Dashboard"
    component={DashboardScreen}
    options={{ title: "Dashboard Screen" }}
  />;

 export const RegistrationNavigator =
  <Tab.Screen
    name="Registration"
    component={RegistrationScreen}
    options={{ title: "Registrations Screen" }}
	/>;

export const HomeNavigator = 
	<Tab.Screen
    name="Home"
    component={HomeScreen}
    options={{ title: "Home Screen" }}
  />;

 export const UserNavigator =
	<Tab.Screen
    name="User"
    component={UserScreen}
    options={{ title: "User Screen" }}
  />;



