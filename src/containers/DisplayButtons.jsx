import React, { useState } from "react";
import { Pressable, Heading, Button, HStack, Box } from "native-base";
import l from "../../helpers/consolelog";

const DisplayButtons = ({showMoments, setShowMoments, onPressCall}) => {
	
const togglePressable = () => { setShowMoments(!showMoments) }
const [ buttonLabel, setButtonLabel] = useState("View");

// View vs Collapse for button
	return (
		<Box>
			<Button variant="outline" 
				w="120" h="120" mt="1"
				onPress={()=>{
					onPressCall();
					togglePressable();
			}}>
				{buttonLabel}Alertness
			</Button>
		
			<Button variant="outline"
				w="120" h="120" mt="1"
				onPress={()=>{
					onPressCall();
					togglePressable();
			}}>
				{buttonLabel} SECOND
			</Button>
		
			<Button variant="outline"
				w="120" h="120" mt="1"
				onPress={()=>{
					onPressCall();
					togglePressable();
			}}>
				{buttonLabel} THIRD
			</Button>
		</Box>
	)
}

export default DisplayButtons;
