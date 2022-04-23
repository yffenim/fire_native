import React from 'react';
import { Heading, extendTheme, Center } from 'native-base';

// custom default styling
// TODO: test styling for light mode


// <LandingScreen />
// set default color mode to dark
export const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// set default component styles
export const components = {
// wrapper for most components
  Center: {
    baseStyle: { 
      bg: "blueGray.900",
      px: 4,
      flex: 1,
    }
  },
  Text: {
    baseStyle: { }
  },
  
};

export const defaultTheme = extendTheme({ config, components });



// <AddDataScreen />

