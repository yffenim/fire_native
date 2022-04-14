import React, { useImperativeHandle, forwardRef } from 'react';
import { View } from 'react-native'


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
