import React from 'react';
import { Box } from 'native-base';

export const ToastBox = ({text}) => {
	return (
		<Box bg="secondary.600" px="5" py="1" rounded="sm" mb={5} p>
			{text}
		</Box>
	)
}
