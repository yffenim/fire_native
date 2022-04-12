import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, ThemeProvider } from '@rneui/themed';

function LoginScreen({ navigation }) {
  return (
    <View>
      <Text>Login Screen</Text>
      <Button
        title="Let's pretend we've logged in!"
        onPress={() => navigation.navigate('User')}
      />
    </View>
  );
}

export default LoginScreen;
