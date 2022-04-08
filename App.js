import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, FlatList, TouchableOpacity, useColorScheme } from 'react-native';

export default class UserAlerts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myInteger: 0,
      average: 0,
      count: 0,
      alerts: [],
      isHidden: true,
      new_level: null
    }
  }

// mount state
  componentDidMount = () => {
    this.getAlerts();
  }

// reload Alert components after DELETE/POST/UPDATE requests
// clear new_level input text field
  updateAlerts = () => {
    console.log("inside update alerts!");
    this.setState({ 
      alerts: [],
      new_level: null
    });
    this.getAlerts();
  }

// Load API data for Alert state
  getAlerts = () => {
//return fetch('https://limitless-citadel-71686.herokuapp.com/api/alerts')
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
            // console.log(this.state);
            // console.log("after array state");
            // console.log(this.state.count);
            });
          });
        })
        .catch((error) => {
          console.error(error);
        });
}

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
   }

  // update the new_level state before we can pass it into the handSubmit function that will send the POST request
  handleLevelChange = (event) => {
    let event_level = event.nativeEvent.data;
    this.setState({new_level: event_level});
  } 

// POST request
  handleSubmit = () => {
    console.log("inside handle submit!");
    let alert_level = this.state.new_level
    console.log(alert_level);
    fetch(('http://localhost:3000/api/alerts'), {      
      method: 'POST',    
      headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
//        'X-CSRF-Token' : token
      },
      body: JSON.stringify({
        alert: {
          level: alert_level,
          user_id: 1,
          }
        })
      })
      .then((response) => {
        if (response.ok) {
        console.log(this);
          this.updateAlerts();
          return response.json();
        }
        throw new Error("Network response was not ok")
        })
      .catch(err => console.log(err));
  };

  render() {
  const alertsData = this.state.alerts

// Formatting one item of the list for <FlatList/>
  const FormatListItem = ({index}) => {
    return (
      <View style={styles.listItem}>
        <Text style={styles.listText}>{`
          Level: ${alertsData[index].level}
          Created at: ${alertsData[index].created_at}
          Updated at: ${alertsData[index].updated_at}
          `}
        </Text>
      </View>
    );
  };

  // save into var so that we can pass into renderItem() 
  const loadListItem = ({index}) => <FormatListItem key={index} index={index} />

  return (
    <View style={styles.container}>

      <Text>Current Average: {this.state.average} </Text> 
      <CountAlerts alertsCount={this.state.count} />
      <Text>New Level To Be Added: {this.state.new_level} </Text> 
      <input
        type="integer" 
        onChange={this.handleChange} 
        defaultValue={this.state.new_level}/> 
        <Button label="Submit Alertness" onPress={this.handleSubmit}/>
        <Button label="Show || Hide Recent Alerts" onPress={this.toggleHidden.bind(this)} />

      <FlatList
        style={styles.flatList}
        data={alertsData}
        renderItem={FormatListItem}
      />
    </View>
      )
  }
}


// child component CountAlerts class inherits state from parent
// passing state from parent component into children as props
export class CountAlerts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // this will get updated when UserAlerts component state changes
    return <View>
      <Text>Total Count: {this.props.alertsCount}</Text>
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
    backgroundColor: '#acb7ae',
    // backgroundColor: '#EFC7B7',
    color: '#d0d0c0'
    },
  button: {
    backgroundColor: '#444',
    padding: 10, 
    marginTop: 10,
    borderRadius: 10
  },
  buttonText: {
    color: '#fff'
  },
  flatList: {
    width: '100%',
  },
  listText: {
    color: 'white',
  },
  listItem: {
    flex: 1,
    marginRight: 180,
    marginLeft: 180,
    marginTop: 10,
    backgroundColor: '#776677',
    padding: 1,
    borderRadius: 10,
  },
});

// managed entry-point for app: https://reactnative.dev/docs/appregistry
AppRegistry.registerComponent('Fire', () => UserAlerts);

