import React, { useState, useEffect } from "react";
import { Text, Center, Box } from 'native-base';
import l from '../../helpers/consolelog'
// CURRENT INACTIVE THOUGH WORKING/WILL BE USED

const UserGreeting = ({name}) => {
  // const [user, setUser] = useState({});
  
// experimenting with a different way of writing fetch
  // const loadUser = async () => {
  //   const res = await fetch("https://api.agify.io/?name=effy");
  //   setUser(await res.json());
  // };  

// returning empty array as second arg to useEffect hook 
// will call the first arg only once upon page load
  // useEffect(() => {
  //   loadUser();
  //   return () => {};
  // }, []);
  l("name: ", name);
    
  return (
    <Box m="10" h="100" mt="-100">
      <Text h="10" fontSize="2xl" color="indigo.200">
        Hello there {name}!
      </Text>
      <Text fontSize="md"> 
        This week, you've been averaging more alertness than last week!
      </Text>
    </Box>
	);
}

export default UserGreeting;
