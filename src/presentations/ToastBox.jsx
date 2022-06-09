import React from 'react';
import { Box } from 'native-base';
var bg = "secondary.600";

export const ToastBox = ({text, bg}) => {
	return (
		<Box bg={bg} px="5" py="1" rounded="sm" mb={5} p>
			{text}
		</Box>
	)
}
