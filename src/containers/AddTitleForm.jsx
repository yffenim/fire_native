import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput } from "react-native";
import { FormControl, Link, Box, Input, Button, HStack, VStack, Select } from 'native-base';
import { Feather } from '@expo/vector-icons';
import l from '../../helpers/consolelog';

// TODO: validations

export default class AddTitleForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      inputTextValue : '',
    }
    // this.searchInput = React.createRef();
  };

  pressHandler = () => {
    this.setState({ inputTextValue : ''});
    // this.searchInput.current._root.clear();
  };

  render(){
    return(
      <Box>

        <Input
          onChangeText={(text) => 
            this.setState({ inputText: text })}
          placeholder="Monday's breakfast"
          value={this.state.inputTextValue}
        />
        <Button onPress={this.pressHandler}>CLEAR</Button>
      </Box>
    )
  }
}



{/* validations experiment:

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
