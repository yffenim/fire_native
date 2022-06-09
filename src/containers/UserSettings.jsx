import React, { useState, useEffect } from 'react';
import { Text, Center, Heading, Box, Button, ScrollView, VStack } from 'native-base';
// import EditUserForm from './EditUserForm'; 
import TitlesForm from './TitlesForm';
import EditUserForm from './EditUserForm';
import { DeleteUserButton } from './UserButtons';
import { SubmitTitlesButton } from "./SubmitButtons";
import { userAtom } from '../atoms/userAtom';
import { useRecoilValue } from 'recoil';
import { LoadingSpinner } from '../presentations/LoadingSpinner';
import UserGreeting from '../containers/UserGreeting';


export default function UserSettings() {
  const userData = useRecoilValue(userAtom);
	const name = userData[0]["name"];
	const [showEditTitle, setShowEditTitle] = useState(false);
	const [showEditUser, setShowEditUser] = useState(false);
	const [showEditEntries, setShowEditEntries] = useState(false);
	const buttonColor = "indigo"

	const showHandler = (action) => { 
		switch (action) {
			case 'title':
				setShowEditTitle(true);
				break;
			case 'user':
				setShowEditUser(true);
				break;
			case 'model':
				setShowEditTitle(true);
				break;
			default:
				l("Error in user settings switch");
		}
	};

	const hideHandler = () => {
		setShowEditTitle(false);
		setShowEditUser(false);
		setShowEditEntries(false);
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
					<Button mb="5"
						variant="outline" colorScheme={buttonColor}
						onPress={()=>{showHandler("title")}}
					>
						Edit Titles
					</Button>
				}
				{showEditTitle &&
					<Button mb="5" 
						variant="outline" colorScheme={buttonColor}
						onPress={()=>{hideHandler()}}
					>
						Hide All
					</Button>
				}
				{showEditTitle &&
					<TitlesForm userData={userData} />
				}
				{showEditUser &&
					<Button mb="5" 
						variant="outline" colorScheme={buttonColor}
						onPress={()=>{hideHandler()}}
					>
						Hide All
					</Button>
				}
				{!showEditUser &&
					<Button mb="4"
						variant="outline" colorScheme={buttonColor}
						onPress={()=>{showHandler("user")}}
					>
						Edit User
					</Button>
				}
				{showEditUser &&
					<EditUserForm userData={userData} />
				}
				<DeleteUserButton userData={userData}  />
			</Box>
    </ScrollView>
	)
};

