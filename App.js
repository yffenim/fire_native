// Component from libraries
import * as React from 'react';
import { Button, ThemeProvider, createTheme } from '@rneui/themed';
import { View, Text, AppRegistry } from 'react-native';
// Navigation and Screens (instead of routing)
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// load all screens 
import LandingScreen from './screen/LandingScreen';
import LoginScreen from './screen/LoginScreen';
import UserScreen from './screen/UserScreen';
// styling 
import theme from './theme'


// in lieu of routing, we have a navigator to handle movement between screens
const Stack = createNativeStackNavigator();

export default class App extends React.Component {
  render() {
    return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Landing" // name can now be used in nav methods
          component={LandingScreen} // what component to load 
          options={{title: "Landing Screen"}}
      />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{title: "Login Screen"}}
      />
        <Stack.Screen 
          name="User" 
          component={UserScreen} 
          options={{title: "User Screen"}}
      />
        <Stack.Screen 
          name="Visual" 
          component={LoginScreen} 
          options={{title: "Visuals Screen"}}
      />
      </Stack.Navigator>
    </NavigationContainer>      

  );
  }
}

// export default App;

AppRegistry.registerComponent('Fire', () => App);

