import React, { useState, useEffect } from 'react';
import { StyleSheet } from "react-native";
import { FormControl, Link, Box, Input, Button, HStack, VStack, Select } from 'native-base';
import { Feather } from '@expo/vector-icons';
// import { secondsAtom } from '../atoms/secondsAtom';
// import { useStateRecoilState } from 'recoil';
import l from '../../helpers/consolelog';

// TODO: validations

export default function TrackModelForm({model, setSecondsTitle, setThirdsTitle, navigation }){

  function handleText(title) {
    if ( model === "seconds" ) {
      setSecondsTitle(title);
      // l("seconds: ", model)
    } else if ( model === "thirds") {
      setThirdsTitle(title)
      // l("thirds: ", model);
    } else {
      l("Error in processing which model for setting titles");
    }
  }

  return (
    <Box w="200" mb="5">
      <FormControl>
        <FormControl.Label>
          Add Category Title:
        </FormControl.Label>
        <Input type="title"
          placeholder="Enter Title"
          onChangeText={handleText}
        />
      </FormControl>
    </Box>
	)
}



{/* validations experiment:
  // VALIDATIONS
  // const lengthError = "Name should contain > 3 character and not blank."
  // const [errors, setErrors] = React.useState({});

      <FormControl isRequired isInvalid={'name' in errors}>

        <FormControl> 
        <FormControl.Label _text={{
        bold: true
          }}>
          Category Name:
        </FormControl.Label>
        <Input type="test"
          placeholder="Enter Data Here" 
          onChangeText={value => setData({ ...formData,
            name: value
        })} />
        {'name' in errors ? 
          <FormControl.ErrorMessage>Error</FormControl.ErrorMessage> : 
          <FormControl.HelperText>
            {lengthError}
          </FormControl.HelperText>
        }
      </FormControl>

*/}


{/*

   <Select
          selectedValue={level}
          minWidth="200"
          // maxWidth="100"
          accessibilityLabel="Choose Initial Entry Level"
          placeholder="Choose Initial Entry Level"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <Feather name="check" size={24} color="black" />
          }} mt={1} onValueChange={itemValue => setLevel(itemValue)}
        >
          <Select.Item label="1" value="1" />
          <Select.Item label="2" value="2" />
          <Select.Item label="3" value="3" />
          <Select.Item label="4" value="4" />
          <Select.Item label="5" value="5" />
          <Select.Item label="6" value="6" />
          <Select.Item label="7" value="7" />
          <Select.Item label="8" value="8" />
          <Select.Item label="9" value="9" />
        </Select>

*/}
