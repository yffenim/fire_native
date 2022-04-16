import React from 'react';
import { Slider, Text, VStack } from 'native-base';
// import SubmitButton from './SubmitButton'

const l = (arg) => console.log(arg);

export default function InputSlider({ setLevel, sliderText, sliderColor }) {
	const defaultValue = null
	const [onChangeValue, setOnChangeValue] = React.useState();
	const [onChangeEndValue, setOnChangeEndValue] = React.useState();

	return (
		<VStack w="100%" alignItems="center" space="3">
			<Text textAlign="center" fontSize="lg"> 
				{sliderText} {onChangeValue}</Text>
			<Slider w="200"
				minValue={1} maxValue={9} step={1} 
				colorScheme={sliderColor}
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
