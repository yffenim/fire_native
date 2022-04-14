import React, { useImperativeHandle, forwardRef } from 'react';
import { View } from 'react-native'

// this is the child component that needs to contain the update display function
// but I can't call my sibling function... and it does not make sense to have to write 
// the same API call here again
// need to re-organize before moving forward

// testing out whether the ref is working
const ChildComponent = (props, ref) => {
  useImperativeHandle(ref, () => ({
    // methods connected to `ref`
    sayHi: () => { sayHi() }
  }))
  // internal method
  const sayHi = () => {
    console.log("Hello")
  }
  return (
    <View />
  );
}

export default forwardRef(ChildComponent)
