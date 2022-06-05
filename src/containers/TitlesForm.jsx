import React, { useState, useEffect } from 'react';
import { StyleSheet, TextInput } from "react-native";
import { SubmitTitlesButton } from "./SubmitButtons";
import { secondsTitleAtom, thirdsTitleAtom } from "../atoms/titlesAtoms";
import { FormControl, Link, Box, Input, Button, HStack, VStack, Select, useToast } from 'native-base';
import { ToastBox } from '../presentations/ToastBox';
import { Feather } from '@expo/vector-icons';
import { useRecoilValue } from 'recoil';
import l from '../../helpers/consolelog';


export default function TitlesForm({setSignedIn, first}) {

  // form validations
  const [formData, setFormData] = React.useState({});
  const [errors, setErrors] = React.useState({});

  // local state for submit 
  const [secondsTitle, setSecondsTitle] = useState("");
  const [thirdsTitle, setThirdsTitle] = useState("");

  // setting placeholder values for form
  const secondsPlaceholder = useRecoilValue(secondsTitleAtom);
  const thirdsPlaceholder = useRecoilValue(thirdsTitleAtom);

  // alert toast + messages
  const toast = useToast();
  const titleRequired = "Title is required";
  const titleTooLong = "Title is too long";

  // input validations
  const validate = () => {
    if (formData.title.length < 1) {
      toast.show({render: () => 
        {return (<ToastBox text={titleRequired} />)}
      });
      return false;
    }
    if (formData.title.length > 9) {
      toast.show({render: () => 
        {return (<ToastBox text={titleTooLong} />)}
      });
      return false;
      }
    return true;
  };

  // handle input state 
  const handleSecondsText = (value) => {
    setSecondsTitle(value);
  };
  
  const handleThirdsText = (value) => {
    setThirdsTitle(value);
  }

  return (
    <Box w="200" mb="5">
      <FormControl 
        isRequired isInvalid={'title' in errors}>  
        <FormControl.Label _text={{ bold: true }}>
          Category Title:
        </FormControl.Label>
        <Input mb="8"
          placeholder={secondsPlaceholder}
          onChangeText={value => {
            setFormData({ ...formData, title: value});
            handleSecondsText(value)
          }} 
        />
      
        <FormControl.Label _text={{ bold: true }} >
          Category Title:
        </FormControl.Label>
        <Input mb="6"
          placeholder={thirdsPlaceholder}
          onChangeText={value => {
            setFormData({ ...formData, title: value})
            handleThirdsText(value)
          }}
        />              
      </FormControl>
      <SubmitTitlesButton
        first={first}
        validate={validate}
        secondsTitle={secondsTitle}
        thirdsTitle={thirdsTitle}
        setSignedIn={setSignedIn}
      />
    </Box>
  )
};




{/* validations experiment:

        {'title' in errors ? 
          <FormControl.ErrorMessage>
            Title must less than 10 characters.
          </FormControl.ErrorMessage> : 
          <FormControl.HelperText>
            {helperText}  
          </FormControl.HelperText>}


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
