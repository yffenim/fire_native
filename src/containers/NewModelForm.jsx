import React, { useState, useEffect } from "react";
import { Center, Text, Button, FormControl, VStack, Input } from "native-base";
import { validateTitle } from '../functions/formValidations.jsx';
import l from "../../helpers/consolelog.js";

// NewModelForm contains:
// - form itself
// - validation 
// - error messages
// - submit button

export default function NewModelForm() {
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const titlePlaceholder = "Please Enter A Title for Your Tracked Moment"

// submit button handler 
  const onSubmit = () => {
    validateTitle({formData, setErrors, errors}) ? 
      l('Submitted') : l('Validation Failed');
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
          placeholder={titlePlaceholder}
          onChangeText={value => setData(
            { ...formData, title: value}
          )} 
				/>
				<Input mt="3"
          placeholder="Please Enter A Level" />

        {'title' in errors ? 
          <FormControl.ErrorMessage>
            {errors.title}
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
