import React from "react";
import { Text, Box, Button } from "native-base";
import Communications from 'react-native-communications';
import l from "../../helpers/consolelog.js";
import { userAtom } from '../atoms/userAtom';
import { useRecoilValue } from 'recoil';
import { userURL } from '../functions/APIDevUrl';


// FUNCTIONALITY FOR EXPORT SCREEN
// get the user id 

export const DownloadButton = () => {
  const user = useRecoilValue(userAtom);
  const uid = user[0]["id"];
  const url = userURL + uid;

  return (
    <Button mt="100"
      colorScheme="indigo"
      variant="outline"
      onPress={() => {
        l("Creating CSV...");
        Communications.web(url)
    }}>
      <Text bold>DOWNLOAD CSV</Text>
    </Button>
  )
};


export const EmailButton = () => {
  const user = useRecoilValue(userAtom);
  const email = user[0]["email"];
  const uid = user[0]["id"];
  const url = userURL + uid;

  return (
    <Button mt="3"
      variant="outline"
      colorScheme="indigo"
      onPress={() => {
        l("Opening Email...");
        Communications.email([email],
        null,null,'My CSV Data Link',url)
    }}>
      <Text bold>EMAIL CSV</Text>
    </Button>
  )
}


