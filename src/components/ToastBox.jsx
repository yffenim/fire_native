import React from 'react';
import { Box } from 'native-base';

export const ToastBox = ({text}) => {
	return (
		<Box bg="secondary.600" px="2" py="1" rounded="sm" mb={5}>
			{text}
		</Box>
	)
}
