import React from 'react';
import { StyleSheet } from "react-native";
import { FormControl, Link, Box, Input } from 'native-base';
import l from '../../helpers/consolelog';
import { ForgotPasswordLink } from './AuthButtons';



export default function LoginForm({setEmail, setPassword}) {

  const handleEmail = (email) => {
    setEmail(email);
  };

  const handlePassword = (password) => {
    setPassword(password);
  };

	return (
  <Box w="200">
		<FormControl>
      <FormControl.Label>
        Email:
      </FormControl.Label>
      <Input type="email" mb="2"
        autoCapitalize="none"
				onChangeText={handleEmail}
      />
    </FormControl>
    <FormControl>
      <FormControl.Label>
        Password:
      </FormControl.Label>
      <Input type="password"
        autoCapitalize="none"
        onChangeText={handlePassword}
      />
      <ForgotPasswordLink />
		</FormControl>
	</Box>
	)
}


