import React from "react";
import { Text, Box, Button } from "native-base";
import Communications from 'react-native-communications';
import l from "../../helpers/consolelog.js";
import { userAtom } from '../atoms/userAtom';
import { useRecoilValue } from 'recoil';


// Buttons for the Export Screen
// TODO: backend authenticated logic for generating the csv files

export const DownloadButton = () => {
  return (
    <Button mt="100"
      colorScheme="indigo"
      variant="outline"
      onPress={() => {
        l("Creating CSV...");
        Communications.web('http://localhost:3000/export_csv.csv')
    }}>
      <Text bold>DOWNLOAD CSV</Text>
    </Button>
  )
};

export const EmailButton = () => {

// reading from uidAtom 
  const user = useRecoilValue(userAtom);
  const email = user[0]["email"];
  l("email is: ", email);

  return (
    <Button mt="3"
      variant="outline"
      colorScheme="indigo"
      onPress={() => {
        l("Opening Email...");
        Communications.email([email],
        null,null,'My CSV Data Link','http://localhost:3000/export_csv.csv')
    }}>
      <Text bold>EMAIL CSV</Text>
    </Button>
  )
}


