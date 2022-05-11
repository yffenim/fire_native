import * as React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Entypo, FontAwesome5, Ionicons, Foundation, MaterialCommunityIcons } from '@expo/vector-icons';
import LandingScreen from "../screens/LandingScreen";
import UserScreen from "../screens/UserScreen";
import AddDataScreen from "../screens/AddDataScreen";
import AlertnessScreen from "../screens/AlertnessScreen";
import SecondsScreen from "../screens/SecondsScreen";
import ThirdsScreen from "../screens/ThirdsScreen";
import ExportScreen from "../screens/ExportScreen";
import l from "../../helpers/consolelog";

// ICONS
// const iconColor = "gray"
const iconColor = "#565461"

const landingIcon = {
	drawerIcon: ({ focused, size }) => (
  	<Entypo name="aircraft-landing"
    	size={24} color={iconColor}
    />
  )
};

const userIcon = {
	drawerIcon: ({ focused, size }) => (
    <FontAwesome5 name="user-astronaut" 
      size={24} color={iconColor}
    />  
  )
};

const addIcon = {
  drawerIcon: ({ focused, size }) => (
    <Ionicons name="add-circle" 
      size={24} color={iconColor}
    />
  )
};

const alertnessIcon = {
  drawerIcon: ({ focused, size }) => (
    <FontAwesome5 name="eye" i
      size={24} color={iconColor} 
    />
  )
};

const secondsIcon = {
  drawerIcon: ({ focused, size }) => (
    <Ionicons name="stats-chart"
      size={24} color={iconColor}
    />
  )
};

const thirdsIcon = {
  drawerIcon: ({ focused, size }) => (
    <Ionicons name="stats-chart"
      size={24} color={iconColor}
    />
  )
};

const exportIcon = {
  drawerIcon: ({ focused, size }) => (
    <MaterialCommunityIcons 
      name="email-send-outline" 
      size={24} color={iconColor} 
   />
  )
};


// NAVIGATION STACK OBJECTS

const Drawer = createDrawerNavigator();
// https://reactnavigation.org/docs/drawer-based-navigation

export const LandingNavigator = 
  <Drawer.Screen
    name="Landing"
    options={landingIcon}
    component={LandingScreen}
	/>;

 export const AddDataNavigator =
	<Drawer.Screen
    name="Add Entry"
    options={addIcon}
    component={AddDataScreen}
  />;
 
export const AlertnessNavigator =
	<Drawer.Screen
    name="Alertness"
    options={alertnessIcon}
    component={AlertnessScreen}
  />;
 
export const SecondsNavigator =
	<Drawer.Screen
    name="Track II"
    options={secondsIcon}
    component={SecondsScreen}
  />;
  
export const ThirdsNavigator =
	<Drawer.Screen
    name="Track III"
    options={thirdsIcon}
    component={ThirdsScreen}
  />;

export const UserNavigator = 
	<Drawer.Screen
    name="Settings"
    options={userIcon}
    component={UserScreen}
  />;

export const ExportNavigator =
  <Drawer.Screen
    name="Export"
    options={exportIcon}
    component={ExportScreen}
  />;

