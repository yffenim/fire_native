import React, { useState, useEffect } from 'react';
import { Center, Text } from "native-base";
import UserFirstTime from '../containers/UserFirstTime';
import UserGreeting from '../containers/UserGreeting';
import AddDataScreen from './AddDataScreen';
import { LoadingSpinner } from '../presentations/LoadingSpinner'
import { userAtom } from "../atoms/userAtom";
import { headersAtom } from "../atoms/headersAtom";
import { secondsTitleAtom, thirdsTitleAtom } from '../atoms/titlesAtoms';
import { useRecoilState, useRecoilValue } from 'recoil';
import { baseURL, userURL } from '../functions/APIDevUrl';
// import { baseURL, userURL } from '../functions/APIProdUrl';
import API from "../functions/APIuser";
import l from "../../helpers/consolelog.js";


// FIRST SCREEN AFTER SIGNING IN
// If first time, show add titles
// If not, show add data

// grab the auth headers
// and send with the save everytime
export default function HomeScreen({navigation}) {
  // const [signedIn, setSignedIn] = useState(false);
  const [signedIn, setSignedIn] = useState(true);
  const [user, setUser] = useRecoilState(userAtom);
	const [secondsTitle, setSecondsTitle ] = useRecoilState(secondsTitleAtom);
  const [thirdsTitle, setThirdsTitle] = useRecoilState(thirdsTitleAtom);
  const api = new API;
  const headers = useRecoilValue(headersAtom);
  // what happens if user has no objects
  // then we need to CREATE the initial objects

  // get and set user atom and title atoms
  function fetchUser() {
    api.get(userURL, headers)
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
