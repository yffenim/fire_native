import React, { useState, useEffect } from 'react';
import { Box, Button, Slider, Text, VStack } from 'native-base';
// import SubmitButton from './SubmitButton'

const l = (arg) => console.log(arg);

export default function InputSlider({ level, setLevel }) {
	const defaultValue = 5
	const [onChangeValue, setOnChangeValue] = React.useState(defaultValue);
	const [onChangeEndValue, setOnChangeEndValue] = React.useState(defaultValue);

// set the moment state from the slider here
// lift state up to parent
// pass into submit button component

	return (
		<VStack w="100%" alignItems="center" space="2">
			<Text textAlign="center">onChangeValue - {onChangeValue}</Text>
      <Text textAlign="center">onChangeEndValue - {onChangeEndValue}</Text>
			<Slider w="200"
				defaultValue={defaultValue} 
				minValue={1} 
				maxValue={10} 
				step={1}
				onChange={(value) => {
					// l(value);
					setOnChangeValue(value);
				}}
				onChangeEnd={(value) => {
					// value && setOnChangeEndValue(value) && setMoment(value);
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
