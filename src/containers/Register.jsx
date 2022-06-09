import React from "react";
import { Box, VStack, Heading } from "native-base";
import RegisterForm from './RegisterForm';
import { RegisterButton, BackToLoginLink } from './AuthButtons';

export default function Register({setForm}) {
  return (
    <VStack space={3} mt="5">
      <Heading>Sign up to continue!</Heading>
      <RegisterForm setForm={setForm} />
      <BackToLoginLink setForm={setForm} />
    </VStack>
  );
}

