import React, { useState, useEffect } from "react";
import { Center, Text, extendTheme } from "native-base";
import { getRequest } from '../functions/UserApiRequests.jsx';
import l from "../../helpers/consolelog.js";
import {CSVLink, CSVDownload} from 'react-csv';

// UserScreen contains:
// Display Averages / Total Counts as Stats
// Add New Model
// Edit User Data
// Delete User Account
// Toggle ColorMode

export default function UserScreen({navigation}) {
  const [user, setUser] = useState({});

  const getApiCall = async () => {
    l("Sending a GET Request to server for Current User data...");
    const data = await getRequest();
    setUser(data);
    l("User Data: ", data); 
    l("User State: ", user); 
  }

 const csvData =[
    ['firstname', 'lastname', 'email'] ,
    ['John', 'Doe' , 'john.doe@xyz.com'] ,
    ['Jane', 'Doe' , 'jane.doe@xyz.com']
  ];

  useEffect(() => {
    getApiCall();
    l("Current User Data has been updated.");
  }, []);

  return (
    <Center>
      <Text>User</Text>

      <Text>
				<CSVLink data={csvData}></CSVLink>
        <CSVDownload data={csvData} target="_blank" />
      </Text>
    {/*
      <AppSettings />
      <UserSettings />
      <Feedback /> {/* email link */}
    </Center>
  );
}

