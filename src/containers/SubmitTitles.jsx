import React from 'react';
import { Box, Heading, Text, Button, Pressable } from 'native-base';
import { postTitleRequest } from '../functions/TitlesApiRequests';
import l from '../../helpers/consolelog';


export default function SubmitTitles({secondsTitle, thirdsTitle, validate}){
	const secondsURL = 'http://localhost:3000/api/seconds/';
	const thirdsURL = 'http://localhost:3000/api/thirds/';

	// function postApiCall() {
	// 	l("Sending title request...");
	// 	postTitleRequest(secondsTitle, secondsURL);
	// 	l("Sending second title request...");
	// 	// postTitleRequest(thirdsTitle, thirdsURL);
	// }

  const onSubmit = () => {
    validate() ? l('Title Form Submitted') : 
    l('Validation Failed');
  };


	return (
		<Box mt="5" w="300">
			<Button 
				colorScheme="indigo"
				onPress={()=>{
					// postApiCall();
					onSubmit();
				}}>
				Submit Categories!
			</Button>
		</Box>		
	)
}
