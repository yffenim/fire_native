import React from 'react';
import { VStack, FormControl, Input, Box } from 'native-base';
import { RegisterButton } from './AuthButtons';

export default function RegisterForm() {

return (
    <Box>
    	<FormControl>
      	<FormControl.Label>Email</FormControl.Label>
        	<Input />
        </FormControl>
      <FormControl>
        <FormControl.Label>Password</FormControl.Label>
          <Input type="password" />
        </FormControl>
      <FormControl>
      	<FormControl.Label>Confirm Password</FormControl.Label>
          <Input type="password" />
        </FormControl>
    </Box>
	)
}
