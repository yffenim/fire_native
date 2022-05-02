import React, { useState, useEffect } from 'react';
import { Center, Text, Button, Box } from "native-base";
// import { getAuthenticatedRequest, getRequest } from '../functions/UserApiRequests.jsx';
import AsyncStorage from "@react-native-async-storage/async-storage";
import l from "../../helpers/consolelog.js";

// This component is the static rendering of the user data
// API GET request
// child components will make API update/delete requests

export default function UserStats(){

	return (
		<Center>
			<Text>User Stats Component </Text>
		</Center>	
	)
}

