import React, { useState } from "react";
import { VStack, HStack, Center, Text, Box, Link } from "native-base";
import { SignInButton, NewUserLink } from './AuthButtons';
import LoginForm from './LoginForm';
import l from '../../helpers/consolelog';


function Login({navigation, setAuth}) {
  const [name, setName] = useState("");

  return (
      <Box>
        <VStack space={3} mt="5">
          <LoginForm />
          <SignInButton navigation={navigation}/>
          <NewUserLink setAuth={setAuth} />
        </VStack>
      </Box>
  );
}

export default Login;
