import React, { useState, useEffect } from 'react';
import { Center, Text } from "native-base";
import UserFirstTime from '../containers/UserFirstTime';
import UserGreeting from '../containers/UserGreeting';
import AddDataScreen from './AddDataScreen';
import { LoadingSpinner } from '../presentations/LoadingSpinner'
import { userAtom } from "../atoms/userAtom";
import { secondsTitleAtom, thirdsTitleAtom } from '../atoms/titlesAtoms';
import { useRecoilState } from 'recoil';
import API from "../functions/API";
import l from "../../helpers/consolelog.js";

// FIRST SCREEN AFTER SIGNING IN
export default function HomeScreen({navigation}) {
  // only show UserFirstTime component if user hasn't signed in yet and this their first time doing so
  const [signedIn, setSignedIn] = useState(false);
  // const [signedIn, setSignedIn] = useState(true);
  const [user, setUser] = useRecoilState(userAtom);
	const [secondsTitle, setSecondsTitle ] = useRecoilState(secondsTitleAtom);
	const [thirdsTitle, setThirdsTitle] = useRecoilState(thirdsTitleAtom);

  // get and set user atom and title atoms
  const api = new API;
  const url = "http://localhost:3000/api/users/"
  function fetchUser() {
    api.get(url)
      .then(response => {
        setUser(response);
        l("response from fetchUser is:" , response);
        setSecondsTitle(response[1]["secondsTitle"]);
        setThirdsTitle(response[1]["thirdsTitle"]);
        // setSignedIn(response[1]["has_signed_in"]);
      })
      .catch(error => {console.error(error)
    })
  }

  useEffect(()=>{
    fetchUser();
  },[])

  return (
    <Center>
      {!signedIn &&
        <UserFirstTime 
          setSignedIn={setSignedIn} 
        /> 
      }
      {signedIn &&
        <AddDataScreen 
          secondsTitle={secondsTitle}
          thirdsTitle={thirdsTitle}
          navigation={navigation}
        />
      }
    </Center>
  )
};





{/*     NOT CURRENTLY IN USE

    <React.Suspense fallback={LoadingSpinner}>
      <Text>Seconds Title: {secondsTitle}</Text>
    </React.Suspense>


  const [userForm, showUserForm] = useState(false)
  const [errors, setErrors] = React.useState({});
  const [formData, setData] = React.useState({});

form validation
  const validate = () => {
    if (formData.name === undefined) {
      setErrors({ ...errors,
        name: 'Name is required'
      });
      return false;
    } else if (formData.name.length < 3) {
      setErrors({ ...errors,
        name: 'Name is too short'
      });
      return false;
    }
    return true;
  };

*/}
