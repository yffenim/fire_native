import React, { useState, useEffect, useRef } from 'react';
import { TouchableHighlight } from 'react-native';
import { Button, useToast, Center } from 'native-base';   
import { Animated } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { atom, useSetRecoilState } from "recoil";
import l from '../../helpers/consolelog';


// THE DATA ENTRY BUTTONS THEMSEVLES
export function AnimatedButton({
  color, 
  value, 
  model,
  type,
  setFirstValue, 
  setSecondValue, 
  setThirdValue, 
  setEditLevel}) {

// setting state for pressed value by which model/action-type
  function handlePress(value) {
    if ( model === "alerts/" && !type ) {
      setFirstValue(value);
    } 
    else if ( model === "alerts/" && type === "edit" ) {
      l("input type: ", type);
      setEditLevel(value);
    }
    else if ( model === "seconds/" && !type ) {
      setSecondValue(value);
    } 
    else if ( model === "seconds/" && type === "edit" ) {
      l("input type: ", type);
      setEditLevel(value);
    } 
    else if ( model === "thirds/" && !type ) {
      setThirdValue(value);
    } 
    else if ( model === "thirds/" && type === "edit" ) {
      l("input type: ", type);
      setEditLevel(value);
    }
    else {
      l("Error passing model value to AnimatedButton in InputButtons");
    };
  };

// Animation 
// Initial scale value of 1 means no scale applied initially.
    const animatedButtonScale = new Animated.Value(1);

    // When button is pressed in, animate the scale to 3
    const onPressIn = () => {
        Animated.spring(animatedButtonScale, {
            toValue: 3,
            useNativeDriver: true,
        }).start();
    };

    // When button is pressed out, animate the scale back to 1
    const onPressOut = () => {
        Animated.spring(animatedButtonScale, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    // The animated style for scaling the button within the Animated.View
    const animatedScaleStyle = {
        transform: [{scale: animatedButtonScale}]
    };

  return ( 
    <TouchableWithoutFeedback
      onPress={()=>{handlePress(value)}}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
    >
      <Animated.View style={animatedScaleStyle}>
        <Button 
          borderRadius="25"
          m="1" p="3" w="12"
          colorScheme={color}
        >
          {value}
        </Button>
      </Animated.View>
    </TouchableWithoutFeedback>
	)
}


