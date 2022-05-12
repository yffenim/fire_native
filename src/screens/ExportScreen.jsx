import React, { useState, useEffect } from "react";
import { VStack, Center, Text, Box, Heading, useColorModeValue, Pressable, Button} from "native-base";
// import { modelsAtom } from '../atoms/modelsAtom';
// import { useRecoilState } from 'recoil';
import Communications from 'react-native-communications';
import { DownloadButton, EmailButton } from '../containers/ExportButtons'
import { EasterEggText } from '../presentations/EasterEggText';
import { 
  defaultStyle,
  GradientSelector1,
  GradientSelector2,
  GradientSelector3,
  GradientSelector4,
  GradientSelector5,
  GradientSelector6,
  GradientSelector7,
  GradientSelector8,
  GradientSelector9,
} from '../presentations/GradientStyles';

import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet }  from "react-native";
import l from "../../helpers/consolelog.js";

// API DATA NEEDS: user email
// default is no gradient
// on click anywhere = change colours!

const styles = StyleSheet.create({
  linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'center',
    alignItems: 'center'
  },
});


// can't pass in variable into color for gradient?
// original background to start
// per click, load a linear gradient page!
// change text to say congrats, you found the egg!

export default function ExportScreen({ navigation }){
  // initialize state for which gradient to render
  const [gradientContainer, setGradientContainer] = useState(defaultStyle());
  // initialize var for storing which gradient use
  var num = null

  // Select a random value upon click and update state
  function onPageClick() {
    num = Math.floor(Math.random() * 9);
    selectGradient(num)
  }

  // Set gradient state based on num
  function selectGradient(n){
    switch (num) {
      case 1:
        setGradientContainer(GradientSelector1);
        break;
      case 2: 
        setGradientContainer(GradientSelector2);
        break;
      case 3: 
        setGradientContainer(GradientSelector3);
        break;
      case 4: 
        setGradientContainer(GradientSelector4);
        break;
      case 5: 
        setGradientContainer(GradientSelector5);
        break;
      case 6:
        setGradientContainer(GradientSelector6);
        break;
      case 7: 
        setGradientContainer(GradientSelector7);
        break;
      case 8:
        setGradientContainer(GradientSelector8);
        break;      
      case 9:
        setGradientContainer(GradientSelector9);
        break;
      default:
        setGradientContainer(defaultStyle);
    }
}

  return (
    <Box>
      <Pressable onPress={()=>{onPageClick()}}>
        {gradientContainer}
      </Pressable>
    </Box> 
  );
}

