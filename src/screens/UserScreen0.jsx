import React, { useState, useEffect } from "react";
import { Center, Text, Button, VStack, HStack } from "native-base";
import UserGreeting from "../containers/UserGreeting"
import UserData from "../containers/UserData"
import EditUser from "../containers/EditUser"
import UserStats from "../containers/UserStats"
import { DeleteButton } from "../containers/UserButtons"
import NewModelForm from "../containers/NewModelForm"
// import { getRequest } from '../functions/UserApiRequests.jsx';
import { getAuthenticatedRequest, getRequest } from '../functions/UserApiRequests.jsx';
import l from "../../helpers/consolelog.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { getHeaders } from '../functions/getStorageData';
// import { jsonToCSV } from 'react-native-csv'
// import { downloadToFolder } from 'expo-file-dl';

// User Screen:
// - greeting with name
// - edit user details / change password / delete account

export default function UserScreen({navigation}) {
// get data for the screen + set state needed by all children
  const [headers, setHeaders] = useState({});
	const [user, setUser] = useState({});
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
  const [models, setModels] = useState({});
  const [visible, setVisible] = useState(false);

// button handler
	const onPressCall = () => {
		getHeaders();
		getApiCall();
	}

// making the call and using return data to set user state
	const getApiCall = async () => {
		const data = await getAuthenticatedRequest(headers);
		// const data = await getRequest();
    l("Returned UserData: ", data);
    l("Returned Ob1: ", data[0]);
    setUser(data);
    setEmail(data[0]);
    setName(data[0].name);
    // setModels(data.slice(1,3));
  }

  useEffect(() => {
    getApiCall();
    l("Add UserData Screen Data has been updated!");
  }, []);

  // var test = user[0].email
  // l("test: ", test);

// get authenticated request headers and save into state
  const getHeaders = async (key='requestHeaders') => {
    try {
      const jsonValue = await AsyncStorage.getItem(key)
        if(jsonValue !== null) {
        let value = JSON.parse(jsonValue)
        // l("Headers from ExportScreen: ", value);
        setHeaders(value);
      }
      } catch(e) {
        l("error with async storage: ", e);
    }
  };

  // const toggleVislble = () => {
  //   setVisible(!visible);
  // }

  return (
    <Center>
      <UserGreeting name={name} />
      <Button variant="outline"
        onPress={()=>{
          onPressCall();
          setVisible(!visible);
          l("clicked");
        }}>
          Edit Your Info
      </Button>
      {visible &&
        <UserData 
          email={email} setEmail={setEmail} 
          name={name} setName={setName} 
        />}   
      {/* UserData needs state for email, name */}  
      <DeleteButton /> 
        {/*
      <EmailCSV />
      <NewModelForm />
      */}
    </Center>
  )
}


