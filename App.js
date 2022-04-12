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
  SectionList
  } from "native-base";
// var h = require('../react-native-hyperscript');
// var React = require('react-native');

// shortened expression for loggin
const l = (arg) => console.log(arg);
// fetch to API
const apiURL = 'https://limitless-citadel-71686.herokuapp.com/api/alerts';
// fetch to local
const localURL = 'http://localhost:3000/api/alerts/';

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
    this.setState({
      isAlertsVisible: !this.state.isAlertsVisible
    })
  }

  handleLevelChange = (event) => {
    l("handle level change:");
    l(event);
    this.setState({new_level: event});
  }

// Load API data for Alert state
  getAlerts = () => {
    l("getting Alerts");
    // return fetch(apiURL)         
    return fetch(localURL)
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

  // POST request
  handleSubmit = () => {
    l("inside handle submit function");
    let alert_level = this.state.new_level;
    l(alert_level);
    fetch((localURL), {
    // fetch((apiURL), {
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

// DELETE request
  handleDelete = (id) => {
    console.log("inside delete")
    console.log(id);
    const deleteURL = localURL + id
    // const deleteURL = apiURL + id
    console.log(deleteURL);
    fetch(deleteURL, {
      method: "delete",
    })
    .then((response) => {
      if (response.ok) {
        console.log(`deleted ${id}`);
        this.updateAlerts();
        // return response.json();
      }
      throw new Error("Network response was not ok.");
    })
  };

// UPDATE edit 
  handleEdit = (id) => {
    // let editURL = apiURL + id
    let editURL = localURL + id
    l(`edit id is: ${id}`);
    l(editURL);
    let alert_level = this.state.new_level;
    // fetch(editURL, {
    //   method: 'PATCH',
    //     headers: {
    //      'Content-Type': 'application/json',
    //      'X-Requested-With': 'XMLHttpRequest',
    //     // 'X-CSRF-Token' : token,
    //   },
    //   body: JSON.stringify({
    //     alert: {
    //       level: alert_level,
    //       user_id: 1
    //     }
    //   })
    // })
    // .then((response) => {
    //   if (response.ok) {
    //     console.log("response ok for update");
    //     this.updateAlerts();
    //     return response.json();
    // }
    // throw new Error("Network response was not ok");
    // })
  };

  render() {
    
    const PostMoment = 
    <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >

      <VStack space={5} alignItems="center">
          <Text>New Level in State: {this.state.new_level} </Text>
          <Heading size="lg">Track Your Moment</Heading>
            <Input
              w="75%"
              maxW="300px"
              onChangeText={this.handleLevelChange}
              placeholder="Please Enter a Value"
            />
            <Button onPress={this.handleSubmit}>Submit</Button>
      </VStack>
    </Center> 


      return (

        <NativeBaseProvider>
          {PostMoment}
          <RecentMoments 
            alerts={this.state.alerts} 
            visible={this.state.isAlertsVisible} 
            toggleAlerts={this.toggleAlerts}
            handleDelete={this.handleDelete}
          />
        {/*
          <PostMoment 
            // handleLevelChange={this.handleLevelChange}
            handleSubmit={this.handleSubmit}
            new_level={this.state.new_level}
        />  
            
          <UserStats average={this.state.average} />
          <EditHistory />
        */}
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
          <Center>
            <Pressable onPress={() => {
              this.props.toggleAlerts();
              l(`toggleAlerts should toggling: ${this.props.visible}`);
             }
           }>
               <Heading fontSize="xl">
                 View Recent Moments
               </Heading>
             </Pressable>
           </Center>
           
        {this.props.visible &&
          <FlatList data={this.props.alerts.slice(0,5)} renderItem={({
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
                      LEVEL: {item.level}
                  </Text>
               
                  <HStack space={3}>
                    <Pressable
                      onPress={() => this.props.handleDelete(item.id)}                 
                    >
                    <Text fontSize="xs" color="coolGray.600" _dark={{
                    color: "warmGray.200"}}
                    >DELETE</Text>
                  </Pressable>
                  <Pressable onPress={this.handleUpdate}>
                    <Text fontSize="xs" color="coolGray.600" _dark={{
                    color: "warmGray.200"}}
                    >EDIT</Text>
                  </Pressable>
                  

                  </HStack>
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

