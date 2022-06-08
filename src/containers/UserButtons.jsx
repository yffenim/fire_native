import React, { useState } from "react";
import { Modal, Button, Box, Text } from 'native-base';
import DeleteUserModal from './DeleteUserModal';
import { headersAtom } from '../atoms/headersAtom';
import API from '../functions/APIuser';
import { baseURL } from '../functions/APIDevUrl';
// import { baseURL } from '../functions/APIProdUrl';
import { useRecoilValue } from 'recoil';
import l from '../../helpers/consolelog';


// Update User
export function SubmitEditButton({userData, uid, email, name, password, confirmPW}) {
  const api = new API;
  const headers = useRecoilValue(headersAtom);
  // need new name, new email, new password
  // logic to see what we need to sent depending on input
  // let's just make it change email first
  // then name
  // then password

  const handlePress = () => {
    editApiCall();
  };
  // what do i not know?
  // if i sent just name, will it update? 

  const editApiCall = () => {
    let url = baseURL + uid  
    let body = JSON.stringify({
      // email: email,
      name: name,
      password: password,
    });

    api.patch(url, body, headers)
      .then(response =>{
        alert("User Data Deleted! Goodbye!");
        l(response);
      })
      .catch(error => {
        console.error(error);
      })
  };


  return (
    <Button 
      variant="outline"
      colorScheme="indigo"
      onPress={()=>{handlePress()}}
    >
      Save User Changes!
    </Button> 
  )
}


// Delete User
export function DeleteUserButton({userData}) {
	const [showModal, setShowModal] = useState(false);

  const showModalHook = () => {
    setShowModal(true);
  };

  return (
    <Box>
      <Button 
        variant="ghost" colorScheme="danger"
        onPress={()=>{showModalHook()}}
      >
        Delete User
      </Button>
      <DeleteUserModal 
        userData={userData}
        showModal={showModal} 
        setShowModal={setShowModal} 
      />
  </Box>  
  )
};




