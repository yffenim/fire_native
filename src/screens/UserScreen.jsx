import React, { useState, useEffect } from "react";
import { Center, Text, extendTheme } from "native-base";
import { getRequest } from '../functions/UserApiRequests.jsx';
import l from "../../helpers/consolelog.js";

// UserScreen contains:
// Display Averages / Total Counts as Stats
// Edit User Data
// Delete User Account
// Toggle ColorMode

export default function UserScreen({navigation}) {
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
      <Text>USER SCREEN: USER SETTINGS + STATS + TOGGLE COLOURS</Text>
    {/*
      <AppSettings />
      <UserSettings />
      <Feedback /> {/* email link */}
    </Center>
  );
}

