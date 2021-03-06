import React, { useState } from 'react';
import { ScrollView, Input, Center, Box, Text, VStack, HStack, Heading, FormControl } from 'native-base';
import EditUserText from '../presentations/EditUserText'
import { EditUserButton } from './UserButtons'
import l from '../../helpers/consolelog';

// NOT IN USE
export default function UserEditForm() {

  function handleText(text) {
    l(text);
  };	

    return (
    <ScrollView>
      <Box w="200">
        <EditUserText />
        <FormControl mt="5">
          <FormControl.Label>
            Name:  
          </FormControl.Label>
          <Input type="name"
            placeholder="Edit Name"
				    onChangeText={handleText}
          />
          <FormControl.Label mt="2">
            Email:
          </FormControl.Label>
          <Input type="email"
            placeholder="Edit Email"
				    onChangeText={handleText}
          />          
          <FormControl.Label mt="2">
            Current Password: 
          </FormControl.Label>
          <Input type="current"
            placeholder="Confirm Current Password"
				    onChangeText={handleText}
          />  
          <FormControl.Label mt="2">
            New Password: 
          </FormControl.Label>
          <Input type="password"
            placeholder="New Password"
				    onChangeText={handleText}
          />    
          <FormControl.Label mt="2">
            Retype New Password:
          </FormControl.Label>
          <Input type="retype"
            placeholder="Retype Password"
				    onChangeText={handleText}
          />
        </FormControl>
        <EditUserButton />  
      </Box>
    </ScrollView>
	)
}
