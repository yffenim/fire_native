import React from 'react';
import { useColorModeValue } from 'native-base';

// for tabs, temporarily
export const color = index === i ?
	useColorModeValue("#000", "#e5e5e5") :  // don't show title when selected
	useColorModeValue("indigo.900", "indigo.100");


export const bgcolor = index === i ?
	useColorModeValue("secondary.300", "secondary.900") :
  useColorModeValue("primary.300", "darkBlue.300");

export const borderColor = index === i ?
	"cyan.500" :
  useColorModeValue("coolGray.200", "gray.400");
