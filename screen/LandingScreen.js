import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, ThemeProvider, createTheme } from '@rneui/themed';
import theme from '../theme'
import { LinearGradient } from 'expo'


function LandingScreen( {navigation} ) {
  return (
    <View>
      <Text>Landing Screen!</Text> 
      <Button
        title="Login!"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

export default LandingScreen;





