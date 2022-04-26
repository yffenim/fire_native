import React, { useState } from "react";
import { Pressable, Heading, Button, HStack, Box } from "native-base";
import l from "../../helpers/consolelog";

const DisplayButtons = ({
	// showMoments, 
	setShowMoments, 
	onPressCall, 
	secondsTitle, 
	thirdsTitle,
	setShowSeconds,
	setShowThirds
}) => {
	
	const togglePressable = () => { setShowMoments(true) }
	const toggleSecondPressable = () => { setShowSeconds(true) }
	const toggleThirdPressable = () => { setShowThirds(true) }
	const [ buttonLabel, setButtonLabel] = useState("alertness");

// View vs Collapse for button
	return (
		<HStack mt="-480">
			<Button 
				variant="outline" 
				colorScheme="secondary"
				w="125" h="125" mt="1"
				onPress={()=>{
					onPressCall();
					togglePressable();
			}}>
				View {buttonLabel} 
			</Button>
			<Button 
				variant="outline"
				colorScheme="warning"
				w="125" h="125" mt="1"
				onPress={()=>{
					onPressCall();
					toggleSecondPressable();
			}}>
				View {secondsTitle}
			</Button>
			<Button 
				variant="outline"
				colorScheme="emerald"
				w="125" h="125" mt="1"
				onPress={()=>{
					onPressCall();
					toggleThirdPressable();
			}}>
				View {thirdsTitle}
			</Button>
		</HStack>
	)
}

export default DisplayButtons;
