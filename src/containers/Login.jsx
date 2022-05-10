import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Box } from "native-base";
import { SignInButton, NewUserLink, SignInButton0 } from './AuthButtons';
import LoginForm from './LoginForm';
import { headersAtom } from '../atoms/headersAtom';
import l from '../../helpers/consolelog';


function Login({navigation, setForm}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [headers, setHeaders] = useRecoilState(headersAtom);
  

  return (
      <Box>
        <LoginForm 
          setEmail={setEmail} 
          setPassword={setPassword} 
        />
        <SignInButton 
          email={email} 
          password={password} 
          setHeaders={setHeaders}
        />
        <SignInButton0 />
        <NewUserLink setForm={setForm} />
      </Box>
  );
}

export default Login;
