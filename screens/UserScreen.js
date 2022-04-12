import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import { 
  VStack, 
  HStack, 
  Center, 
  Text, 
  Box, 
  Button, 
  NativeBaseProvider, 
  Heading, 
  FormControl, 
  Input, 
  Link,
  FlatList,
  } from "native-base";
// var h = require('../react-native-hyperscript');
// var React = require('react-native');

// shortened expression for loggin
const l = (arg) => console.log(arg);
// fetch to API
const apiURL = 'https://limitless-citadel-71686.herokuapp.com/api/alerts'
// fetch to local
const localURL = 'http://localhost:3000/api/alerts'


// parent component to mount state
class HoldState extends Component {
  constructor(prop) {
    super(prop);

      this.state = {
        moments: [],
        count: 0,
        average: 100,
        new_moment: null,
        isMomentVisible: false
      }
  }
  
  componentDidMount = () => {
    this.getAlerts();
  }

// reload Alert components after DELETE/POST/UPDATE requests
// clear new_level input text field
  updateAlerts = () => {
    l("inside update alerts!");
    this.setState({ 
      alerts: [],
      new_level: null
    });
    this.getAlerts();
  }

// Load API data for Alert state
  getAlerts = () => {
    return fetch(apiURL)         
      .then((response) => {
        if (response.ok) { 
          l("response ok");
          return response.json();
        }
        throw new Error("Network response was not ok.");
        })
          .then((response) => {
            l(response);
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
            // console.log(newAlert);
              this.setState((prevState) => ({
                alerts: [...prevState.alerts, newAlert],
                average: respAvg,
                count: respCount
            }), function() {
            // call back to do something w/ new state?
            });
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }

    render() {
      return (
        <NativeBaseProvider>
          <Text>Array</Text>

        </NativeBaseProvider>
    )
  }
}


class PostMoment extends Component {
  render(){
    return (
      <NativeBaseProvider>
        <Text>Track Moment</Text>
      </NativeBaseProvider>
    )
  }   
}

class RecentMoments extends Component {
  render(){
    return(
      <NativeBaseProvider>
        <Text>Recent Moments</Text>
      </NativeBaseProvider>
    )
  }
}


class UserStats extends Component {
  render(){
    
    return(
      <NativeBaseProvider>
        <Text>View Stats</Text>
        <Text>Current Average: {this.props.avg} </Text>
      </NativeBaseProvider>
    )
  }
}

class EditHistory extends Component {
  render(){
    return(
      <NativeBaseProvider>
        <Text>View Stats</Text>
      </NativeBaseProvider>
    )
  }
}

class UserDashboard extends Component {
  render(){
    return (
      <NativeBaseProvider>
        <HoldState />
        <PostMoment />   
        <RecentMoments />
        <UserStats avg="1000"/>
        <EditHistory />
      </NativeBaseProvider>    
    )
  } 
}


export default UserDashboard;

AppRegistry.registerComponent('Fire', () => UserScreen);

