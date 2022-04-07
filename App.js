import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class MyParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myInteger: 0,
      alertsAvg: 0
    }
  }


  componentDidMount() {
    // using a direct return since GET request does not need header params 
return fetch('http://localhost:3000/api/alerts')
      .then((response) => {
        if (response.ok) { 
          console.log("response ok");
          return response.json();
        }
        throw new Error("Network response was not ok.");
        })
        .then((response) => {
          console.log(response);
          this.setState({
            alertsAvg: response.alerts_average
          }, function() {
            // In this block you can do something with new state.
          });
        })
        .catch((error) => {
          console.error(error);
        });
}

getRandomAvg() {
    const randomInt = Math.floor(Math.random()*100);

    this.setState({
      alertAvg: randomInt
    });

  }

  getRandomInteger() {
    const randomInt = Math.floor(Math.random()*100);

    this.setState({
      myInteger: randomInt
    });

  }




  incrementInteger() {
    
    this.setState((previousState, currentProps) => {
      return {
        myInteger: previousState.myInteger+1
      }
    });

  }
  render() {

    return <View style={styles.container}>
      <Text>Current Alertness Average: {this.state.alertsAvg} </Text> 
      <Text>Parent Component Integer: {this.state.myInteger}</Text>

      <MyChildComponent myInteger={this.state.myInteger} />

      <Button label="Get Random Integer" onPress={this.getRandomInteger.bind(this)} />
      <Button label="Increment Integer" onPress={this.incrementInteger.bind(this)} />

    </View>

  }
}

// child component class that inherits state from parent
export class MyChildComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    
    // this will get updated when "MyParentComponent" state changes
    return <View>
      <Text>Child Component Integer: {this.props.myInteger}</Text>
    </View>
    
  }
}

export class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{this.props.label}</Text>
        </View>
      </TouchableOpacity>
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button: {
    backgroundColor: '#444',
    padding: 10, 
    marginTop: 10
  },
  buttonText: {
    color: '#fff'
  }
});

AppRegistry.registerComponent('MyApp', () => MyParentComponent);
