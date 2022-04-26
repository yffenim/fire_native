import React from 'react';
import { Text, Center, Button, Box } from 'native-base';
import l from "../../helpers/consolelog";

function Testme({passingLevel}) {
	l("passingLevel: ", passingLevel);

	return (
		<Box>
			<Text>
				TEST ME: {passingLevel}
			</Text>
		</Box>
	)
};

export default Testme;
