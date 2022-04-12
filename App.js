import * as React from 'react';
import { AppRegistry } from 'react-native';
// Navigation and Screens (instead of routing)
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// load all screens 
import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import UserScreen from './screens/UserScreen';
import VisualScreen from './screens/VisualScreen';

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
          name="Register"
          component={RegisterScreen}
          options={{title: "Register Screen"}}
        />
        <Stack.Screen
          name="User"
          component={UserScreen}
          options={{title: "User Screen"}}
        />
        <Stack.Screen
          name="Visual"
          component={VisualScreen}
          options={{title: "Visual Screen"}}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
  }
}

// export default App;

AppRegistry.registerComponent('Fire', () => App);
