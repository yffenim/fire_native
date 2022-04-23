import * as React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
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



const Drawer = createDrawerNavigator();
// https://reactnavigation.org/docs/drawer-based-navigation

export const LandingNavigator = 
  <Drawer.Screen
    name="Landing"
    component={LandingScreen}
	/>;

export const UserNavigator = 
	<Drawer.Screen
    name="User"
    component={UserScreen}
  />;

 export const AddDataNavigator =
	<Drawer.Screen
    name="AddData"
    component={AddDataScreen}
  />;
 
 {/*
export const SummaryNavigator =
	<Drawer.Screen
    name="Summary"
    component={SummaryScreen}
  />;

 export const ExportNavigator =
	<Drawer.Screen
    name="Export"
    component={ExportScreen}
  />;
 */}

