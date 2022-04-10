import * as React from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View,FlatList, TouchableOpacity, useColorScheme, Pressable, Modal, Alert, Button, Stylesheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import styles from './styles'
import { UserAlerts } from './UserAlerts'


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.textStyle}>Home Screen</Text>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.textStyle}> Login </Text>
      </Pressable>

    </View>
  );
}

function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.textStyle}>This is the Login/Register Screen!</Text>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.textStyle}>Go to Home</Text>
      </Pressable>

      <Pressable
        style={styles.button}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textStyle}>Go back</Text>
      </Pressable>


    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


AppRegistry.registerComponent('Fire', () => App)

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#acb7ae',
    padding: 10, 
    marginTop: 10,
    borderRadius: 10
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

