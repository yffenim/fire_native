import React, { useRef, useState, useEffect } from "react";
import { VStack, HStack, Center, Text, Box, Button } from "native-base";
import { ValueButtons, rowValues, SubmitButton } from "../src/components/InputButtons";
import { DataTitle } from "../src/components/DataTitle";
import l from "../helpers/consolelog.js";
import { postRequest } from '../src/api/ApiRequests.jsx';


function HomeScreen({ navigation }) {
  const [level, setLevel] = useState({});
  l("level has been set: ", level);


  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={5}
      flex={1}
    >
      <DataTitle />  
      <ValueButtons 
        inputValues={rowValues[0]} 
        colors="warning" 
        setLevel={setLevel} 
      />
      <ValueButtons 
        inputValues={rowValues[1]} 
        colors="secondary" 
        setLevel={setLevel} 
      />
      <ValueButtons 
        inputValues={rowValues[2]} 
        colors="tertiary"
        setLevel={setLevel} 
      />
        <SubmitButton level={level}/>
    </Center>
  );
}

export default HomeScreen;


