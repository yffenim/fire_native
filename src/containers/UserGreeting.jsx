import React, { useState, useEffect } from "react";
import { Text, Center, Box } from 'native-base';
import l from '../../helpers/consolelog'
// CURRENT INACTIVE THOUGH WORKING/WILL BE USED

const UserGreeting = (props) => {
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
    <Box m="10">
      <Text h="10" fontSize="xl" color="indigo.200">
        Hello there {props.name}!
      </Text>
      <Text> 
        Did you know that you can create and track up up to 2 additional moments?</Text>
    </Box>
	);
}

export default UserGreeting;
