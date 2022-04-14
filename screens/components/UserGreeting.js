import React, { useState, useEffect } from "react";
import { Text, Center, Box } from 'native-base';


export default function UserGreeting() {
const [user, setUser] = useState({});

// experimenting with a different way of writing fetch
  const loadUser = async () => {
    const res = await fetch("https://api.agify.io/?name=effy");
    setUser(await res.json());
  };  

// returning empty array as second arg to useEffect hook 
// will call the first arg only once upon page load
  useEffect(() => {
    loadUser();
    return () => {};
  }, []);


  return (
      <Text>Hello there {user.name}</Text>
	);
}
