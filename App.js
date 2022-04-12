import { AppRegistry, SafeAreaView } from 'react-native';
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
  Spacer,
  Pressable,
  } from "native-base";
// var h = require('../react-native-hyperscript');
// var React = require('react-native');

// shortened expression for loggin
const l = (arg) => console.log(arg);
// fetch to API
const apiURL = 'https://limitless-citadel-71686.herokuapp.com/api/alerts';
// fetch to local
const localURL = 'http://localhost:3000/api/alerts';

// const toggleAlerts = () => {
//     l("inside toggle", isAlertsVisible);
//     this.setState({
//       isAlertsVisible: !this.state.isAlertsVisible
//     })
// }



// parent component to mount state
class UserDashboard extends Component {
  constructor(prop) {
    super(prop);

      this.state = {
        alerts: [],
        user: [],
        average: 0,
        count: 0,
        new_alert: null,
        isAlertsVisible: false,
      }
  }
  
  componentDidMount = () => {
    this.getAlerts();
    l("state mounted");
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

// toggle displaying recent history
  toggleAlerts = (visible) => {
    l("inside toggleAlerts");
    l(this.state.isAlertVisible);
    this.setState({
      isAlertsVisible: !this.state.isAlertsVisible
    })
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
            // l(response);
            var respArr = response[0];
            var respCount = response[1].count;
            var respAvg = response[1].average;
            // l(respArr);
              // this.setState({ average: 100 });
              respArr.forEach((alert) => { 
              // l(alert);
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
          l(error);
        });
    }

    render() {
      return (

        <NativeBaseProvider>
          <PostMoment />   
          <RecentMoments 
            alerts={this.state.alerts} 
            visible={this.state.isAlertsVisible} 
            toggleAlerts={this.toggleAlerts}
          />
          {/*
          <UserStats average={this.state.average} />
          <EditHistory />
          */}
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


  render() {
    l("rendering react moments")

    return(
      <NativeBaseProvider>
        <Box>
          <Pressable onPress={() => {
            this.props.toggleAlerts();
            l(`toggleAlerts should toggling: ${this.props.visible}`);
            }
          }>
            <Heading fontSize="xl" p="4" pb="3">
              View Recent Moments
            </Heading>
          </Pressable>

        {this.props.visible &&
          <FlatList data={this.props.alerts} renderItem={({
            item
          }) => 
            <Box borderBottomWidth="1" _dark={{
              borderColor: "gray.600"
              }} borderColor="coolGray.200" pl="4" pr="5" py="2">
              <HStack space={3} justifyContent="space-between">
                <VStack>
                  <Text _dark={{
                    color: "warmGray.50"
                    }} color="coolGray.800" bold>
                      Level: {item.level}
                  </Text>
                  <Text color="coolGray.600" _dark={{
                    color: "warmGray.200"
                    }}>
                      EDIT / DELETE
                  </Text>
                </VStack>
                <Spacer />
                <Text fontSize="xs" _dark={{
          color: "warmGray.50"
        }} color="coolGray.800" alignSelf="flex-start">
                Updated: {item.updated_at}
                </Text>
              </HStack>
          </Box>} keyExtractor={item => item.id.toString()} />
        }
      </Box>
    </NativeBaseProvider>
    )
  }
}


class UserStats extends Component {
  render(){
    
    return(
      <NativeBaseProvider>
        <Text>View Stats</Text>
        <Text>Current Average: {this.props.average} </Text>
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

// class UserDashboard extends Component {
//   render(){
//     return (
//       <NativeBaseProvider>
//         <HoldState />
//         <PostMoment />   
//         <RecentMoments />
//         <UserStats avg={this.state.average}/>
//         <EditHistory />
//       </NativeBaseProvider>    
//     )
//   } 
// }


export default UserDashboard;

AppRegistry.registerComponent('Fire', () => UserScreen);

