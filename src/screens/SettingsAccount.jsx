import React, { useState, useEffect } from 'react';
import { Heading, VStack, Center, Text, Box, Button, useColorModeValue, Pressable, ScrollView } from "native-base";
import { SceneMap } from 'react-native-tab-view';
import { useRecoilState, useRecoilValue } from 'recoil';
import API from '../functions/API';
import { userAtom } from '../atoms/userAtom';
import UserEdit from '../containers/UserEdit';
import UserGreeting from '../containers/UserGreeting';
import { userURL } from '../functions/APIDevUrl';
import { LoadingSpinner } from '../presentations/LoadingSpinner';
import l from "../../helpers/consolelog.js";


export default function TabRouteFirst() {
  const userData = useRecoilValue(userAtom);
  const name = userData["name"];
  // const [user, setUser] = useRecoilState(userAtom);
  // const [name, setUsername] = useState("");
  // const api = new API; 

  // get and store UserDataA
  // const getUserData = () => {
  //   l("making getUserData request");
		// api.get(userURL)
			// .then(response => {
				// l(response);
  //       setUser(response);
  //       setUsername(response[0]["name"])
			// })
			// .catch(error => {
				// console.error(error);
		// });
  // };

  // useEffect(()=>{
  //   getUserData;
  // },[]);

return (
  <Center>
    <React.Suspense fallback={LoadingSpinner}> 
      <UserGreeting name={name} />
    </React.Suspense>
  </Center>
  )
};





