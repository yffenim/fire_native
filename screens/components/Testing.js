import React, { useState, useEffect } from 'react';
import {
  Text,
  Button
} from "native-base";

const l = (arg) => console.log(arg);

// const testing = 
// 	<Text>Test from importing from Test</Text>
export default function Testing({data, onChildClick}) {
    return (
    <Button onPress={onChildClick}><Text>Button</Text></Button>
  )
}



// export default testing;

