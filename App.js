import * as React from 'react';
import { AppRegistry } from 'react-native';
// Navigation and Screens (instead of routing)
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider, StorageManager, ColorMode, extendTheme, Text } from "native-base";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// load all screens 
import LandingScreen from './screens/LandingScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import DataScreen from './screens/DataScreen';


const l = (arg) => console.log(arg);

// in lieu of routing, we have a navigator to handle movement between screens
const Stack = createNativeStackNavigator();


export default class App extends React.Component {

render() {

// set default to dark
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
const customTheme = extendTheme({ config });

    return (
  <NativeBaseProvider theme={customTheme}>
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
            name="Home"
            component={HomeScreen}
            options={{title: "Home Screen"}}
          />
          <Stack.Screen
            name="Data"
            component={DataScreen}
            options={{title: "Data Screen"}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
   );
  }
}

// export default App;

AppRegistry.registerComponent('Fire', () => App);
