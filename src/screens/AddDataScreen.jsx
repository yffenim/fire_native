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
  const first = "Alertness";
  const second = "Appetite";
  const third = "";
  const [level, setLevel] = useState(null);

 useEffect(() => {
  l("New Level State from AddDataScr: ", level);
  }, [level]);

  return (
    <Center>
      <ScrollView>
        <ModelTitle model={first} level={level} />
        <AddData model={first} setLevel={setLevel} level={level} /> 
        <ModelTitle model={second} />
        <AddData model={second} /> 
        <ModelTitle model="" />
        <AddData mdodel="" /> 
      </ScrollView>
    </Center>
  );
}



