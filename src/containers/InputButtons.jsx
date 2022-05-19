import React, { useState, useEffect, useRef } from 'react';
import { TouchableHighlight } from 'react-native';
import { Button, useToast, Center } from 'native-base';   
import { Animated } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { atom, useSetRecoilState } from "recoil";
import l from '../../helpers/consolelog';

export function AnimatedButton({color, value, setFirstValue, setSecondValue, setThirdValue, model}) {
  
  function handlePress(value) {
    // l("model is: ", model);

    if ( model === "moments" ) {
      setFirstValue(value);
      l("moments: ", model);
    } else if ( model === "seconds" ) {
      setSecondValue(value);
      l("seconds: ", model); 
    } else if ( model === "thirds" ) {
      setThirdValue(value);
      l("thirds: ", model);
    } else {
      l("Error with passing model value to AnimatedButton");
    }
  }

// Animation 
// Initial scale value of 1 means no scale applied initially.
    const animatedButtonScale = new Animated.Value(1);

    // When button is pressed in, animate the scale to 5
    const onPressIn = () => {
        Animated.spring(animatedButtonScale, {
            toValue: 5,
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


