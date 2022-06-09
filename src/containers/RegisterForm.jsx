import React, { useState } from 'react';
import { VStack, FormControl, Input, Box } from 'native-base';
import { RegisterButton } from './AuthButtons';
import l from '../../helpers/consolelog';


export default function RegisterForm({setForm}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleEmail = (input) => {
    setEmail(input);
  };

  const handlePassword = (input) => {
    l(input);
    setPassword(input);
  };

  const handleConfirm = (input) => {
    l(input);
    setPasswordConfirm(input);
  };

return (
    <Box>
    	<FormControl>
        <FormControl.Label>
          Email
        </FormControl.Label>
        <Input type="email" 
          autoCapitalize="none"
          onChangeText={handleEmail} 
        />
        </FormControl>
      <FormControl>
        <FormControl.Label>
          Password
        </FormControl.Label>
        <Input type="password" 
          autoCapitalize="none"
          onChangeText={handlePassword} 
        />
        </FormControl>
      <FormControl>
        <FormControl.Label>
          Confirm Password
        </FormControl.Label>
         <Input type="password" 
          autoCapitalize="none"
          onChangeText={handleConfirm} 
        />
        </FormControl>
        <RegisterButton
          email={email} 
          password={password} 
          passwordConfirm={passwordConfirm}
          setForm={setForm}
        />
    </Box>
	)
}
