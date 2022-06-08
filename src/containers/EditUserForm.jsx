import React, { useState, useEffect } from 'react';
import { FormControl, Link, Box, Input, Button, HStack, VStack, Select, useToast } from 'native-base';
import { SubmitEditButton } from './UserButtons';
import { ToastBox } from '../presentations/ToastBox';
import { useRecoilValue } from 'recoil';
import l from '../../helpers/consolelog';

// UPDATE USER on SETTINGS/ACCOUNT
export default function EditUserForm({setSignedIn, firstTime, userData}) {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);;
  // set placeholder values
  const [namePH, setNamePH] = useState(userData[0]["name"]);
  const [emailPH, setEmailPH] = useState(userData[0]['email']);
  // set user input as local state
  const [password, setPassword] = useState(null);
  const [confirmPW, setConfirmPW] = useState(null);
  // needed for submit
  const uid = userData[0]["id"];
  // handle input  
  const handleName = (value) => { setName(value) };
  const handleEmail = (value) => { setEmail(value) };
  const handlePassword = (value) => { setPassword(value) };
  const handleConfirmPW = (value) => { setConfirmPW(value) };

  return (
    <Box w="200" mb="5">
      <FormControl>  
        <FormControl.Label _text={{ bold: true }}>
          Name:
        </FormControl.Label>
        <Input mb="8"
          placeholder={namePH}
          onChangeText={value => {
            handleName();
          }} 
        />
      
        <FormControl.Label _text={{ bold: true }} >
          Email:
        </FormControl.Label>
        <Input mb="6"
          placeholder={emailPH}
          onChangeText={value => {
            handleEmail();
          }}
        /> 
        <FormControl.Label _text={{ bold: true }} >
          Password:
        </FormControl.Label>
        <Input mb="6"
          placeholder="***********"
          onChangeText={value => {
            handlePassword();
          }}
        />
        <FormControl.Label _text={{ bold: true }} >
          Confirm Password
        </FormControl.Label>
        <Input mb="6"
          placeholder="***********"
          onChangeText={value => {
            handleConfirmPW();
          }}
        />
      </FormControl>
      <SubmitEditButton
        uid={uid} userData={userData} 
        email={email}
        name={name}
        password={password}
        confirmPW={confirmPW}
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
