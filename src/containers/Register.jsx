import React from "react";
import { Box, VStack, Heading } from "native-base";
import RegisterForm from './RegisterForm';
import { RegisterButton, BackToLoginLink } from '../components/AuthButtons';

export default function Register({setAuth}) {
  return (
    <VStack space={3} mt="5">
      <Heading>Sign up to continue!</Heading>
      <RegisterForm />
      <BackToLoginLink setAuth={setAuth} />
    </VStack>
  );
}

