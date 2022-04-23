import React, { useRef, useState, useEffect } from "react";
import { View } from "react-native";
import { Center } from "native-base";
import { ValueButtons, rowValues, SubmitButton } from "./InputButtons";
import l from "../../helpers/consolelog.js";

// MODEL COMPONENT for POST data

export default function AddData() {
  const [level, setLevel] = useState({});
  l("level has been set: ", level);

  return (
    <Center>
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
        <SubmitButton level={level} model="Alertness"/>
    </Center>
  );
}



