import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class UserAlerts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myInteger: 0,
      average: 0,
      count: 0,
      alerts: []
    }
  }


  componentDidMount = () => {
    this.getAlerts();
  }

  getAlerts = () => {
    // using a direct return since GET request does not need header params
    // can't see this request...
    return fetch('http://localhost:3000/api/alerts')
    // return fetch("https://catfact.ninja/fact")
      .then((response) => {
        if (response.ok) { 
          console.log("response ok");
          return response.json();
        }
        throw new Error("Network response was not ok.");
        })
          .then((response) => {
          console.log(response);
            var respArr = response[0];
            var respCount = response[1].count;
            var respAvg = response[1].average;
              this.setState({ average: 100 });
              respArr.forEach((alert) => { 
              // console.log("inside loop:");
              // console.log(alert);
              if (alert.created_at) {
                var parts = alert.created_at.slice(0, -1).split('T');
                var dateComponent = parts[0];
                var timeComponent = parts[1].slice(0, 5)
                var created = dateComponent + " at " + timeComponent;
              };
              if (alert.updated_at) {
                var parts2 = alert.updated_at.slice(0, -1).split('T');
                var dateComponent2 = parts2[0];
                var timeComponent2 = parts2[1].slice(0, 5)
                var updated = dateComponent2 + " at " + timeComponent2;
              };
              var newAlert = {
                id: alert.id,
                user_id: alert.user_id,
                level: alert.level,
                created_at: created,
                updated_at: updated,
              };
            // console.log("this is a new alert:");
            // console.log(newAlert);
              this.setState((prevState) => ({
                alerts: [...prevState.alerts, newAlert],
                average: respAvg,
                count: respCount
            }), function() {
            // call back to do something w/ new state?
            console.log(this.state);
            //this.setState({ alertAvg: 100 });
            console.log("after array state");
            console.log(this.state.count);
            });
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
      <Text>Playing with this Integer: {this.state.myInteger}</Text>
      <Text>Current Average: {this.state.average} </Text> 
      <CountAlerts alertsCount={this.state.count} />

      <Button label="Get Random Integer" onPress={this.getRandomInteger.bind(this)} />
      <Button label="Increment Integer" onPress={this.incrementInteger.bind(this)} />

      <DisplayAlerts alerts={this.state.alerts} />
    </View>

  }
}

// child component CountAlerts class inherits state from parent
// passing state from parent component into children as props
export class CountAlerts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
   // console.log("inside count");
   // console.log(this);
   // console.log(this.props);
    // this will get updated when UserAlerts component state changes
    return <View>
      <Text>Total Count: {this.props.alertsCount}</Text>
    </View>
    
  }
}

// child component Display Alerts
// passing state from parent component into children as props
export class DisplayAlerts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("inside Display");
    console.log(this.props);
    const alertsRender = this.props.alerts
  return <View>
    <Text>
    <h3>Your Latest...</h3>
    {alertsRender && alertsRender.map((obj) =>  
      <div key={obj.id}>
        <p>Alert level: {obj.level}</p>
        <p>Created at: {obj.created_at} </p>
        <p>Updated at: {obj.updated_at} </p>
        <br/>
      </div>
      )}
    </Text>
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
