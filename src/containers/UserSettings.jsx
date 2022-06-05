import React, { useState, useEffect } from 'react';
import { Text, Center, Heading, Box, Button, ScrollView, VStack } from 'native-base';
import UserEditForm from './UserEditForm'; 
import TitlesForm from './TitlesForm';
import { SubmitTitlesButton } from "./SubmitButtons";
import { userAtom } from '../atoms/userAtom';
import { useRecoilValue } from 'recoil';
import { LoadingSpinner } from '../presentations/LoadingSpinner';
import UserGreeting from '../containers/UserGreeting';


export default function UserSettings() {
  const userData = useRecoilValue(userAtom);
	const name = userData[0]["name"];
	const [showEditTitle, setShowEditTitle] = useState(false);
	
	const buttonHandler = (action) => { 
		action === "show" ? setShowEditTitle(true) : setShowEditTitle(false);
	};


return (
    <ScrollView>
			<UserGreeting name={name} />
			<Box 
        alignItems="center"
        bg="darkBlue.900"
        borderRadius="10"
				p="5" pt="8" pb="8"
			>
				{!showEditTitle &&
					<Button variant="outline" onPress={()=>{buttonHandler("show")}}>
						Edit Model Titles
					</Button>
				}
				{showEditTitle &&
					<Button mb="5" variant="outline" onPress={()=>{buttonHandler("hide")}}>
						Hide Model Titles
					</Button>
				}
				{showEditTitle &&
					<TitlesForm />
				}
			</Box>
    </ScrollView>
	)
};

{/*
import { SubmitTitlesButton } from "./SubmitButtons";

		<Center>
      <React.Suspense fallback={LoadingSpinner}>
        <UserGreeting name={name} />
			<TitlesForm />
      </React.Suspense>
		</Center>

*/}
