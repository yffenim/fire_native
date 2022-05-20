import React, { useState, useEffect, useRef } from 'react';
import { TouchableHighlight } from 'react-native';
import { Button, useToast, Box, Text, Heading, VStack, HStack } from 'native-base';   
import l from '../../helpers/consolelog';
import { postMomentRequest } from '../functions/MomentsApiRequests.jsx';
import { postSecondRequest } from '../functions/SecondsApiRequests.jsx';
import { postThirdRequest } from '../functions/ThirdsApiRequests.jsx';
import { AnimatedButton } from './InputButtons';
import { Animated, Image, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


export function ModelButtons({setFirstValue, setSecondValue, setThirdValue, model}) {

  function handleValueButton(val){
    setLevel(val);
  }
    // const colors = ["indigo", "darkBlue", "cyan", "teal", "emerald", "green", "lime", "yellow", "orange"]

  const colors = ["indigo", "blue", "cyan", "teal", "green", "lime", "yellow", "amber", "orange"]

  return (
    <Box>
      <HStack>
        <AnimatedButton 
          model={model} 
          value={1} color={colors[0]} 
          setFirstValue={setFirstValue} 
          setSecondValue={setSecondValue}
          setThirdValue={setThirdValue}
        />
        <AnimatedButton 
          model={model}
          value={2} color={colors[1]} 
          setFirstValue={setFirstValue} 
          setSecondValue={setSecondValue}
          setThirdValue={setThirdValue}
        />
        <AnimatedButton 
          model={model}
          value={3} color={colors[2]} 
          setFirstValue={setFirstValue} 
          setSecondValue={setSecondValue}
          setThirdValue={setThirdValue}
        />
      </HStack>
      <HStack ml="10">
        <AnimatedButton 
          model={model}
          value={4} color={colors[3]} 
          setFirstValue={setFirstValue} 
          setSecondValue={setSecondValue}
          setThirdValue={setThirdValue}
        />
        <AnimatedButton
          model={model}
          value={5} color={colors[4]} 
          setFirstValue={setFirstValue} 
          setSecondValue={setSecondValue}
          setThirdValue={setThirdValue}
        />
        <AnimatedButton 
          model={model}
          value={6} color={colors[5]} 
          setFirstValue={setFirstValue} 
          setSecondValue={setSecondValue}
          setThirdValue={setThirdValue}
        />
      </HStack>
      <HStack>
        <AnimatedButton 
          model={model}
          value={7} color={colors[6]} 
          setFirstValue={setFirstValue} 
          setSecondValue={setSecondValue}
          setThirdValue={setThirdValue}
        />
        <AnimatedButton 
          model={model}
          value={8} color={colors[7]} 
          setFirstValue={setFirstValue} 
          setSecondValue={setSecondValue}
          setThirdValue={setThirdValue}
        />
        <AnimatedButton 
          model={model}
          value={9} color={colors[8]} 
          setFirstValue={setFirstValue} 
          setSecondValue={setSecondValue}
          setThirdValue={setThirdValue}
        />
      </HStack>
    </Box>
	)
}


