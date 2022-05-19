import React from 'react';
import { StyleSheet } from "react-native";
import { FormControl, Link, Box, Input } from 'native-base';
import l from '../../helpers/consolelog';
import { ForgotPasswordLink } from './AuthButtons';

// TODO: validations

export default function TrackModelForm({model, setSecondsTitle, setThirdsTitle}){

  function handleText(title) {
    if ( model === "seconds" ) {
      setSecondsTitle(title)
      // l("seconds: ", model)
    } else if ( model === "thirds") {
      setThirdsTitle(title)
      // l("thirds: ", model);
    } else {
      l("Error in processing which model for setting titles");
    }
  }
  
	return (
  <Box w="200">
		<FormControl>
      <FormControl.Label>
        Category:
      </FormControl.Label>
    	<Input type="title"
				onChangeText={handleText}
      />
    </FormControl>
	</Box>
	)
}


