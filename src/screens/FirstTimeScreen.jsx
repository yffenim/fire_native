import React from 'react';
import { Center, Text } from "native-base";
import UserFirstTime from '../containers/UserFirstTime';
import UserGreeting from '../containers/UserGreeting';
import { LoadingSpinner } from '../presentations/LoadingSpinner'
import l from "../../helpers/consolelog.js";

export default function FirstTimeScreen({navigation}) {

  return (
    <Center>
      <React.Suspense fallback={LoadingSpinner}>
        <UserGreeting />
        <UserFirstTime navigation={navigation} /> 
      </React.Suspense>
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
