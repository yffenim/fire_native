import * as React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Entypo, FontAwesome5, Ionicons, Foundation } from '@expo/vector-icons';
import LandingScreen from "../screens/LandingScreen";
import UserScreen from "../screens/UserScreen";
import AddDataScreen from "../screens/AddDataScreen";
import SummaryScreen from "../screens/SummaryScreen";
import ExportScreen from "../screens/ExportScreen";
import l from "../../helpers/consolelog";


// ICONS

const landingIcon = {
	drawerIcon: ({ focused, size }) => (
  	<Entypo name="aircraft-landing"
    	size={24} color="black"
    />
  )
};

const userIcon = {
	drawerIcon: ({ focused, size }) => (
    <FontAwesome5 name="user-astronaut" 
      size={24} color="black" 
    />  
  )
};

const addIcon = {
  drawerIcon: ({ focused, size }) => (
    <Ionicons name="add-circle" 
      size={24} color="black" 
    />
  )
};

const summaryIcon = {
  drawerIcon: ({ focused, size }) => (
    <Ionicons name="stats-chart" 
      size={24} color="black" 
    />
  )
};

const exportIcon = {
  drawerIcon: ({ focused, size }) => (
    <Foundation name="page-export-csv" 
      size={24} color="black" 
    />  
  )
};


// NAVIGATION STACK OBJECTS

const Drawer = createDrawerNavigator();
// https://reactnavigation.org/docs/drawer-based-navigation

export const LandingNavigator = 
  <Drawer.Screen
    name=" "
    options={landingIcon}
    component={LandingScreen}
	/>;

export const UserNavigator = 
	<Drawer.Screen
    name="  "
    options={userIcon}
    component={UserScreen}
  />;

 export const AddDataNavigator =
	<Drawer.Screen
    name="   "
    options={addIcon}
    component={AddDataScreen}
  />;
 
export const SummaryNavigator =
	<Drawer.Screen
    name="    "
    options={summaryIcon}
    component={SummaryScreen}
  />;

 export const ExportNavigator =
	<Drawer.Screen
    name="     "
    options={exportIcon}
    component={ExportScreen}
  />;

