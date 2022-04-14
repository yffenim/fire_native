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

// using functional compoennt
function hello(name) {
	return(
	<Text>Hi {name} </Text>
	)
};

// using class component
class Print extends Component {
	constructor(props){
		super(props);
			this.state = { name: "default" }
	}
	render() {
	return(
		<Text>Hi {this.state.name} state then props: {this.props.name} from Print class component!</Text>
		)
	}
}

// class is useful if we need 


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
	const print = hello()


		return (
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
			>
			{hello("effy")}
			<Print name="effy"/>


	</Center>
		)
	}
}

export default HomeScreen;
