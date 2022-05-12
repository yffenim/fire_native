import React, { useState, useEffect } from 'react';
import { Center, Text, Button, VStack, Input, FormControl, Heading } from "native-base";
import { getAuthenticatedRequest, getRequest } from '../functions/UserApiRequests.jsx';
import { SubmitButton, DeleteButton } from "../containers/UserButtons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import l from "../../helpers/consolelog.js";

// This component is the static rendering of the user data
// API GET request
// child components will make API update/delete requests

export default function UserData({
	email, setEmail, name, setName}){

	return (
		<Center>
			<VStack width="90%" mx="3" maxW="300px">
      <FormControl isRequired>
        <FormControl.Label _text={{
        bold: true
      }}>Name</FormControl.Label>
		
				<Input placeholder="" onChangeText={value => setName({ ...formData,
        name: value
			})} />
        <FormControl.Label _text={{
        bold: true
      }}>Email</FormControl.Label>
				<Input placeholder="" onChangeText={value => setEmail({ ...formData,
        name: value
			})} />

				<FormControl.HelperText _text={{
        fontSize: 'xs'
      }}>
          Name should contain at least 3 character.
        </FormControl.HelperText>
				
				<FormControl.ErrorMessage _text={{
        fontSize: 'xs'
      }}>
          Error Name
        </FormControl.ErrorMessage>
			</FormControl>
			<SubmitButton />
			<DeleteButton />
		</VStack>
	</Center>
	)
}
