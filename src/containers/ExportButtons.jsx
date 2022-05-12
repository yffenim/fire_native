import React from "react";
import { Text, Box, Button} from "native-base";
import Communications from 'react-native-communications';
import l from "../../helpers/consolelog.js";


// TODO: API DATA TO GENERATE EMAIL/LINK ONCE AUTH DONE
export const DownloadButton = () => {
  return (
    <Button mt="100"
      colorScheme="indigo"
      variant="outline"
      onPress={() => {
        l("Downloading CSV");
        Communications.web('http://localhost:3000/export_csv.csv')
    }}>
      <Text bold>DOWNLOAD CSV</Text>
    </Button>
  )
};

export const EmailButton = () => {
  return (
    <Button mt="3"
      variant="outline"
      colorScheme="indigo"
      onPress={() => {
        l("Opening Email...");
        Communications.email(['effymmin@protonmail.com'],
        null,null,'My CSV Data Link','http://localhost:3000/export_csv.csv')
    }}>
      <Text bold>EMAIL CSV</Text>
    </Button>
  )
}


