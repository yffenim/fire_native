import React, { useState, useEffect } from "react";
import { Modal, Button, Box, Text } from 'native-base';
import DeleteUserModal from './DeleteUserModal';
import { headersAtom } from '../atoms/headersAtom';
import API from '../functions/APIuser';
import { useRecoilValue } from 'recoil';
import { baseURL, userURL } from '../functions/APIDevUrl';
import l from '../../helpers/consolelog';


// UPDATE USER
export function SubmitEditButton({userData, uid, email, name, password, confirmPW}) {
  const api = new API;
  const headers = useRecoilValue(headersAtom);

  const handlePress = () => {
    alert("This feature is not yet ready :)");
    // editApiCall();
  };

  const editApiCall = () => {
    let url = baseURL + uid  
    let body = JSON.stringify({
      name: name,
      password: password,
    });

    api.patch(url, body, headers)
      .then(response =>{
        alert("User Data Updated!");
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


// DELETE USER
export function DeleteUserButton({userData}) {
	const [showModal, setShowModal] = useState(false);
  const [deleteBool, setDeleteBool] = useState(false);
  const timer = 5;
	const api = new API;
	const uid = userData[0]["id"];
	const deleteURL = userURL + uid;

  // creating a delay for closing modal 
  function timeout(delay) {
    return new Promise( res => setTimeout(res, delay) );
  };

  // delete user api call
  const deleteUser = async () => {
    await timeout(1000); 
    setShowModal(false);
    api.delete(deleteURL)
      .catch(error => {
        console.error(error);
      });
    alert("User deleted! Please restart app.");
  };

  // counter for canceling delete
  const [counter, setCounter] = useState(timer);
  useEffect(() => {
		counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    if ( counter === 0 && deleteBool === true) { deleteUser() };
  }, [counter]);

  // show modal, reset counter
  const handleDeletePress = () => {
    setShowModal(true);
    setDeleteBool(true);
    if ( counter === 0 ) { setCounter(timer) };
  };

  return (
    <Box>
      <Button 
        variant="ghost" colorScheme="danger"
        onPress={()=>{handleDeletePress()}}
      >
        Delete User
      </Button>
      <DeleteUserModal
        setDeleteBool={setDeleteBool}
        counter={counter}
        userData={userData}
        showModal={showModal} 
        setShowModal={setShowModal} 
      />
  </Box>  
  )
};




