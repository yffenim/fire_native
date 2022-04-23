import React, { useState, useEffect } from "react";
import { Center, Text, extendTheme } from "native-base";
// import { getUserRequest } from '../src/functions/UserApiRequests.jsx';
import l from "../../helpers/consolelog.js";

// Edit User Data
// Toggle ColorMode

export default function UserScreen({navigation }) {
  const [user, setUser] = useState({});

  const getApiCall = async () => {
    l("Sending a GET Request to server for Current User data...");
    const data = await getRequest();
    setUser(data);
  }

  useEffect(() => {
    getApiCall();
    l("Current User Data has been updated.");
  }, []);

  return (
    <Center>
      <Text>USER SCREEN: SETTINGS FOR USER/APP OVERALL</Text>
    {/*
      <AppSettings />
      <UserSettings />
      <Feedback /> {/* email link */}
    </Center>
  );
}

