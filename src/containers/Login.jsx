import React, { useState } from "react";
import { Box } from "native-base";
import { SignInButton, NewUserLink } from './AuthButtons';
import LoginForm from './LoginForm';
import l from '../../helpers/consolelog';


function Login({navigation, setAuth}) {
  const [name, setName] = useState("");

  return (
      <Box>
        <LoginForm />
        <SignInButton navigation={navigation}/>
        <NewUserLink setAuth={setAuth} />
      </Box>
  );
}

export default Login;
