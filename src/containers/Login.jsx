import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Box } from "native-base";
import { SignInButton, NewUserLink, SignInButton0 } from './AuthButtons';
import LoginForm from './LoginForm';
import { headersAtom } from '../atoms/headersAtom';
import { userAtom } from '../atoms/userAtom';
import { uidAtom } from '../atoms/uidAtom';
import l from '../../helpers/consolelog';


function Login({navigation, setForm}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [headers, setHeaders] = useRecoilState(headersAtom);
  const [uid, setUid] = useRecoilState(uidAtom);
  const [user, setUser] = useRecoilState(userAtom)

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
          setUid={setUid}
          setUser={setUser}
          navigation={navigation}
        />
        <NewUserLink setForm={setForm} />
      </Box>
  );
}

export default Login;
