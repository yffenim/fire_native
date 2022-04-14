import React, { forwardRef, useRef, useImperativeHandle } from 'react';
import { Text } from 'native-base';


const ChildRef = forwardRef((props, ref) => {
    useImperativeHandle(
        ref,
        () => ({
            showAlert() {
                alert("Child Function Called")
            }
        }),
    )
    return (
			<Text>Child Component</Text>
    )
})

export default ChildRef;
