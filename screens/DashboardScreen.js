import React, { useState, useEffect } from "react";
// import { Text } from "native-base";
import { StyleSheet, Text, View, Button } from 'react-native';
const l = (arg) => console.log(arg);


export default function DashboardScreen() {

  const [data, setData] = useState({});
  l(data);

  const loadData = async () => {
    const res = await fetch("https://api.agify.io/?name=effy");
    setData(await res.json());
  };  
  
  useEffect(() => {
    loadData();
    return () => {};
  }, []);

  
  return (
    <View>
      <Text>Hello {data.name}</Text>
    </View>
	);
}

