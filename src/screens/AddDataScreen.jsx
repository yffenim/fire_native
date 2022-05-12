import React, { useRef, useState, useEffect } from "react";
import { Center, ScrollView, Button, Box } from "native-base";
import ModelTitle from "../presentations/ModelTitle";
// import SummaryScreen from "./SummaryScreen";
// import AddData from "../containers/AddData";
import AddEntry from "../containers/AddEntry"; 
import l from "../../helpers/consolelog.js";
// import { getRequest } from '../functions/MomentsApiRequests.jsx';

// This is the Parent for All Model Data
// Data needed: POST request and which Model?




export default function AddDataScreen({ navigation }) {
  const [model, setModel] = useState("default")



  return (
    <Center>
      <AddEntry model={model} />

    </Center>
  );
}



