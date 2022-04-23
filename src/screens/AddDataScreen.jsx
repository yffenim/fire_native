import React, { useRef, useState, useEffect } from "react";
import { Center, ScrollView, Button } from "native-base";
import { ModelTitle } from "../presentations/ModelTitle";
import AddData from "../containers/AddData";
import l from "../../helpers/consolelog.js";

// TODO: add scrollview here
// 
// second and third need to make an UPDATE api call
// children of <AddModel /> are input buttons and sub buttons

export default function AddDataScreen({ navigation }) {
  
  return (
    <Center>
      <ScrollView>
        <AddData /> 
        <AddData /> 
        <AddData /> 
      </ScrollView>
    </Center>
  );
}



