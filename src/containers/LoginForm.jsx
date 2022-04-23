import React from 'react';
import { StyleSheet } from "react-native";
import { FormControl, Link, Box, Input } from 'native-base';
import l from '../../helpers/consolelog';

export default function LoginForm() {

  const handleText = (text) => {
    l(text);
  }

	return (
	<Box>
		<FormControl>
  	<FormControl.Label>Email:</FormControl.Label>
    	<Input
				onChangeText={handleText}
      />
      </FormControl>
    	<FormControl>
      <FormControl.Label>Password:</FormControl.Label>
      <Input type="password" />
      <Link
        _text={{
        fontSize: "xs",
      	fontWeight: "500",
        color: "indigo.500",
        }}
        alignSelf="flex-end"
        mt="1"
      >
      	Forget Password?
      </Link>
		</FormControl>
	</Box>
	)
}

// const styles = StyleSheet.create({
//   text: {
//     fontSize: "xs",
//     fontWeight: "500",
//     color: "indigo.500"
//   }
// });