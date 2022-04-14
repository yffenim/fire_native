import React from 'react';
import { Text } from 'native-base';

// using functional compoennt
function hello(name) {
	return(
	<Text>Hi {name} from imported  </Text>
	)
};

export default hello
