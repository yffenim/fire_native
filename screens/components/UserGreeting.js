import React, { useState, useEffect } from "react";
import { Text, Center, Box } from 'native-base';


export default function UserGreeting() {
const [user, setUser] = useState({});

  const loadUser = async () => {
    const res = await fetch("https://api.agify.io/?name=effy");
    setUser(await res.json());
  };  
  
  useEffect(() => {
    loadUser();
    return () => {};
  }, []);


  return (
      <Text>Hello there {user.name}</Text>
	);
}
