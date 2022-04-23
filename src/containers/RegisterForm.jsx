import React, { useState } from 'react';
import { VStack, FormControl, Input, Box } from 'native-base';
import { RegisterButton } from '../components/AuthButtons';
import l from '../../helpers/consolelog';


export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleEmail = (input) => {
    setEmail(input);
  };

  const handlePassword = (input) => {
    setPassword(input);
  };

  const handleConfirm = (input) => {
    // confirm that both pw are same 
  }

return (
    <Box>
    	<FormControl>
      	<FormControl.Label>Email</FormControl.Label>
        	<Input type="email" onChangeText={handleEmail} />
        </FormControl>
      <FormControl>
        <FormControl.Label>Password</FormControl.Label>
          <Input type="password" onChangeText={handlePassword} />
        </FormControl>
      <FormControl>
      	<FormControl.Label>Confirm Password</FormControl.Label>
          <Input type="password" onChangeText={handleConfirm} />
        </FormControl>
        <RegisterButton email={email} password={password} />
    </Box>
	)
}
