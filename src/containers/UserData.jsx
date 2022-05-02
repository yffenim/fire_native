import React, { useState, useEffect } from 'react';
import { Center, Text, Button } from "native-base";
import { getAuthenticatedRequest, getRequest } from '../functions/UserApiRequests.jsx';
import AsyncStorage from "@react-native-async-storage/async-storage";
import l from "../../helpers/consolelog.js";

// This component is the static rendering of the user data
// API GET request
// child components will make API update/delete requests

export default function UserData(){
	const [user, setUser] = useState({});
  const [headers, setHeaders] = useState({});

// button handler
	const onPressCall = () => {
		getHeaders();
		getApiCall();
	}

// making the call and using return data to set user state
	const getApiCall = async () => {
		// const data = await getAuthenticatedRequest(headers);
		const data = await getRequest();
		l("Returned UserData: ", data);
	}

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

	return (
		<Center>
			<Text>User Data Component </Text>
			<Button onPress={()=>{onPressCall()}}>Get User Data</Button>
		</Center>
	)
}

