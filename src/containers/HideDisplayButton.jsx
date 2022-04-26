import React, { useState } from "react";
import { Pressable, Heading, Button, HStack, Box, Text } from "native-base";
import l from "../../helpers/consolelog";
// import {CSVLink, CSVDownload} from 'react-csv';

const HideDisplayButton = ({
	showMoments, 
	setShowMoments, 
	onPressCall, 
	setShowSeconds, 
	setShowThirds
}) => {

// TODO: DISPLAY RECENT ALERTS -> CHANGE TO OTHER MODELS
	
// Interesting that we HAVE to use false here
// it will not work with !showMoments?
	const togglePressable = () => { 
		setShowMoments(false);
		setShowSeconds(false);
		setShowThirds(false);
	}

 const csvData =[
    ['firstname', 'lastname', 'email'] ,
    ['John', 'Doe' , 'john.doe@xyz.com'] ,
    ['Jane', 'Doe' , 'jane.doe@xyz.com']
  ];


	return (
		<HStack mt="-1">
			<Button 
				w="120"
				variant="outline" 
				colorScheme="indigo"
				onPress={()=>{
					togglePressable();
			}}>
				Hide Data
			</Button>
		</HStack>
	)
}

export default HideDisplayButton;

