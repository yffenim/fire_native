import React, { useState, useEffect } from "react";
import { Center, Text } from "native-base";
// import { getRequest } from '../functions/UserApiRequests.jsx';
import l from "../../helpers/consolelog.js";
import { jsonToCSV } from 'react-native-csv'
import { downloadToFolder } from 'expo-file-dl';


export default function UserScreen({navigation}) {

const jsonData = `[
  {
      "Column 1": "1-1",
      "Column 2": "1-2",
      "Column 3": "1-3",
      "Column 4": "1-4"
  },
  {
      "Column 1": "2-1",
      "Column 2": "2-2",
      "Column 3": "2-3",
      "Column 4": "2-4"
  },
  {
      "Column 1": "3-1",
      "Column 2": "3-2",
      "Column 3": "3-3",
      "Column 4": "3-4"
  },
  {
      "Column 1": 4,
      "Column 2": 5,
      "Column 3": 6,
      "Column 4": 7
  }
]`;

const results = jsonToCSV(jsonData);
l("json data: ", jsonData);
l("csv results: ", results);

  return (
    <Center>
      <Text>User</Text>


    </Center>
  );
}

