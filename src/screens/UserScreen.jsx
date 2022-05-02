import React, { useState, useEffect } from "react";
import { Center, Text, Button } from "native-base";
import UserGreeting from "../containers/UserGreeting"
import UserData from "../containers/UserData"
import NewModelForm from "../containers/NewModelForm"
// import { getRequest } from '../functions/UserApiRequests.jsx';
import l from "../../helpers/consolelog.js";
// import { jsonToCSV } from 'react-native-csv'
// import { downloadToFolder } from 'expo-file-dl';

// User Screen:
// - greeting with name
// - add a new moment title ON that page, not here but link to it here
// - edit user details / change password / delete account
// - email CSV data to yourself


export default function UserScreen({navigation}) {

  return (
    <Center>
      <UserGreeting />
      <UserData />    

      {/*
      <EmailCSV />
      <NewModelForm />
      */}
    </Center>
  )
}


