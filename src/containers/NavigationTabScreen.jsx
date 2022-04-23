import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LandingScreen from "../screens/LandingScreen";
// Authentication + Registration

import UserScreen from "../screens/UserScreen";
// Edit User Info
// Visual Settings

import AddDataScreen from "../screens/AddDataScreen";
// POST new model data

// import SummaryScreen from "../screens/SummaryScreen";
// Edit recently created data (display last 5 of each model)
// Chart model data

// import ExportScreen from "../screens/ExportScreen";
// Export combined data organized by hourly
// Export individual model data


const Tab = createBottomTabNavigator();
// https://reactnavigation.org/docs/tab-based-navigation

export const LandingNavigator = 
  <Tab.Screen
    name="Landing"
    component={LandingScreen} 
    options={{ title: "Landing Screen" }}
	/>;

export const UserNavigator = 
	<Tab.Screen
    name="User"
    component={UserScreen}
    options={{ title: "User Screen" }}
  />;

 export const AddDataNavigator =
	<Tab.Screen
    name="AddData"
    component={AddDataScreen}
    options={{ title: "Add Data Screen" }}
  />;
 
 {/*
export const SummaryNavigator =
	<Tab.Screen
    name="Summary"
    component={SummaryScreen}
    options={{ title: "Summary Screen" }}
  />;

 export const ExportNavigator =
	<Tab.Screen
    name="Export"
    component={ExportScreen}
    options={{ title: "Export Screen" }}
  />;
 */}

