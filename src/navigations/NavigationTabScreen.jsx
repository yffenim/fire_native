import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LandingScreen from "../../screens/LandingScreen";
import HomeScreen from "../../screens/HomeScreen";
import UserScreen from "../../screens/UserScreen";
import DataScreen from "../../screens/DataScreen";

// https://reactnavigation.org/docs/tab-based-navigation

const Tab = createBottomTabNavigator();

export const LandingNavigator = 
  <Tab.Screen
    name="Landing" // name can now be used in nav methods
    component={LandingScreen} 
    options={{ title: "Landing Screen" }}
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

 export const DataNavigator =
	<Tab.Screen
    name="Data"
    component={DataScreen}
    options={{ title: "Data Screen" }}
  />;

