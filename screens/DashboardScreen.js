import React, { useState, useEffect } from "react";
import { 
	Center, 
	Text, 
	Container,
	Header,
	Input,
	Button,
	Pressable,
	Spacer
} from 'native-base';



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
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
		>
      <Text>Hellow {data.name}</Text>

		</Center>
	);
}

