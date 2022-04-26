import React, { useState, useEffect } from "react";
import { Center, Text, Button } from "native-base";
import UserGreeting from "../containers/UserGreeting"
import NewModelForm from "../containers/NewModelForm"
// import { getRequest } from '../functions/UserApiRequests.jsx';
import l from "../../helpers/consolelog.js";
// import { jsonToCSV } from 'react-native-csv'
// import { downloadToFolder } from 'expo-file-dl';


export default function UserScreen({navigation}) {
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    if (formData.name === undefined) {
      setErrors({ ...errors,
        name: 'Title is required'
      });
      return false;
    } else if (formData.name.length < 3) {
      setErrors({ ...errors,
        name: 'Title is too short'
      });
      return false;
    }
    return true;
  };

  const onSubmit = () => {
    validate() ? l('Submitted') : l('Validation Failed');
  };

  return (
    <Center>
      <UserGreeting />
      <NewModelForm />
    </Center>
  )
}


