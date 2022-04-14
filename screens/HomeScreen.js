import React, { Component } from 'react';
import { 
	Center, 
	Text, 
	Container,
	Header,
	Input,
	Button,
	Pressable,
	Spacer
} from 'native-base';
import greeting from '../components/UserGreeting'
// import hello from '../components/hello'
// import Print from '../components/HelloClass'


class HomeScreen extends Component {
	constructor(prop) {
		super(prop);

			this.state = {
        alerts: [],
        user: [],
        average: 0,
        count: 0,
        new_alert: null,
        isAlertsVisible: false,
        showModal: false
      }
	}

	render() {

		return (
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
			>
				{greeting()}



			</Center>
		)
	}
}

export default HomeScreen;
