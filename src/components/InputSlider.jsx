import React from 'react';
import { Slider, Text, VStack } from 'native-base';
// import SubmitButton from './SubmitButton'

const l = (arg) => console.log(arg);

export default function InputSlider({ level, setLevel }) {
	const defaultValue = null
	const [onChangeValue, setOnChangeValue] = React.useState();
	const [onChangeEndValue, setOnChangeEndValue] = React.useState();

// set the moment state from the slider here
// lift state up to parent
// pass back into sibling button component

	return (
		<VStack w="100%" alignItems="center" space="3">
			<Text textAlign="center" fontSize="lg"> How do you feel? {onChangeValue}</Text>
			{/* <Text textAlign="center">END VALUE - {onChangeEndValue}</Text> */}
			<Slider w="200"
				minValue={1} 
				maxValue={9} 
				step={1}
				colorScheme="indigo"
				onChange={(value) => {
					setOnChangeValue(value);
				}}
				onChangeEnd={(value) => {
					value && setLevel(value);
				}}
	  	>
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
			</Slider>
		</VStack>
)}
