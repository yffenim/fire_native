import React, { useState, useEffect } from "react";
import { Center, Text, Button, FormControl, VStack, Input } from "native-base";
// import { getRequest } from '../functions/UserApiRequests.jsx';
import l from "../../helpers/consolelog.js";

// For Making a New Model
// needs: title, first object
export default function NewModelForm() {
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    if (formData.title === undefined) {
      setErrors({ ...errors,
        title: 'Title is required'
      });
      return false;
    } else if (formData.title.length < 3) {
      setErrors({ ...errors,
        title: 'Title is too short'
      });
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    validate() ? l('Submitted') : l('Validation Failed');
  };

  return (
    <VStack width="90%" mx="3" maxW="300px">
      <FormControl isRequired isInvalid={'title' in errors}>
        <FormControl.Label _text={{
					bold: true
        }}>
          New Title:
        </FormControl.Label>
        <Input 
          placeholder="Please Enter A Title for Your Tracked Moment" 
          onChangeText={value => setData(
            { ...formData, title: value}
          )} 
				/>
				<Input mt="3"
					placeholder="Please Enter A Level" />
        {'title' in errors ? 
          <FormControl.ErrorMessage>
            Error
          </FormControl.ErrorMessage> : 
          <FormControl.HelperText>
            Title should contain at least 3 character.
          </FormControl.HelperText>}
        </FormControl>
        <Button onPress={onSubmit} mt="5" colorScheme="indigo">
          Submit
        </Button>
      </VStack>
	)
}
