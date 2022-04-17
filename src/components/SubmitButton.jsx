import React from 'react';
import { Button, Center, useToast, Box } from 'native-base';
import { postRequest, patchRequest } from '../api/ApiRequests.jsx'
import { ToastBox } from './ToastBox';
import l from "../../helpers/consolelog";

const momentsURL = "https://limitless-citadel-71686.herokuapp.com/api/alerts/"

export default function SubmitButton({level, updateDisplay, buttonText, buttonColor, editMode, editId}) {

// debugging setEditMode
  // const toggleTest = () => {
  //   setEditMode(!editMode);
  //   l(editMode);
// }
 
  const patchApiCall = async () => {
    await patchRequest(editId, level)
  }

	const postApiCall = async () => {
    await postRequest(level)
    // .catch((err) => l("error: ", err))
	}

	const handleSubmit = () => {
		( editMode ? 
			patchApiCall(editId) : 
			postApiCall(), updateDisplay() 
		)};

  const toast = useToast();
  const submitMsg = "Moment Created!" // need to create editMsg

  return (
		<Center>
			<Button size="xs" w="100" colorScheme={buttonColor}
      onPress={()=>{
        handleSubmit();
        toast.show({render: () => {
          return (
            <ToastBox text={submitMsg} />
          )
        }
      });
			}}>{buttonText}</Button>
 	</Center>
	)
}
