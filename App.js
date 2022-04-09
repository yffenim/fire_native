import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TextInput, View, SafeAreaView, FlatList, TouchableOpacity, useColorScheme, Pressable, Modal, Alert } from 'react-native';

export default class UserAlerts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      myInteger: 0,
      average: 0,
      count: 0,
      alerts: [],
      isAlertsVisible: false,
      isModalVisible: false,
      new_level: null,
      modalAction: 'default'
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
    return fetch('https://limitless-citadel-71686.herokuapp.com/api/alerts')
    // return fetch('http://localhost:3000/api/alerts')
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

// Display Alerts functions
// set state for isAlertsHidden by toggling
  toggleHidden () {
    this.setState({
      isAlertsVisible: !this.state.isAlertsVisible
    })
   }

// Modal Component functions
// set visibility for isModalVisible 
  setModalVisible = (visible) => {
    this.setState({ isModalVisible: visible });
  }

// set which modal to render
  setModalAction = (action) => {
    let current = this.state.modalAction
    // console.log("state inside setModalAction:");
    // console.log(current);
    // console.log(action);
    this.setState({ modalAction: action });
    // let updated = this.state.modalAction
    // console.log(updated);
  }

// POST Alert request functions
// update the new_level state before we can pass it into the handSubmit function that will send the POST request
  handleLevelChange = (event) => {
    let event_level = event.nativeEvent.data;
    this.setState({new_level: event_level});
  } 

// TODO:fix the issue with 10 submitting as 0...
// instead of validations for 1 > input > 11, could make it a button modal
// then a drop down scroll of 1-10
// then a submit button
// effy, do not do this right now.

// POST request
  handleSubmit = () => {
    // console.log("inside handle submit!");
    let alert_level = this.state.new_level;
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
  const modalVisible = this.state.isModalVisible;
  
  const closeAlertModal = () => {
    this.setModalVisible(!isModalVisible);
  };

  const modalAction = this.state.modalAction
  console.log(`modal action state: ${modalAction}`);


// Display Alerts component formatting
// this is one item of the list for <FlatList/>
  const FormatListItem = ({index}) => {
    return (
      <SafeAreaView style={styles.listItem}>
        <Text style={styles.listText}>{`
          Level: ${alertsData[index].level}
          Created at: ${alertsData[index].created_at}
          Updated at: ${alertsData[index].updated_at}
          `}
      </Text>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeAlertModal}
      >
          {/* Modal Action for Editing an Alert*/}
        {modalAction === 'EditAlert' ?
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                ADD EDIT AND DELETE ALERT
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyles}>Hide Modal</Text>
              </Pressable>
            </View>
          </View> :
        modalAction == 'NewAlert' ?
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                TRACK AN ALERT
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyles}>Hide Modal</Text>
              </Pressable>
            </View>
          </View> :
        null}
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => {
            this.setModalVisible(true);
            this.setModalAction("EditAlert");
            }
         }
        >
          <Text style={styles.textStyle}>Edit This Entry</Text>
        </Pressable>
      </SafeAreaView>
    );
  };

  // save into var so that we can pass into renderItem() 
  const loadListItem = ({index}) => <FormatListItem key={index} index={index} />

  return (
    <View style={styles.container}>

      <Text>Current Average: {this.state.average} </Text> 
      <CountAlerts alertsCount={this.state.count} />
      <Text>New Level To Be Added: {this.state.new_level} </Text> 
      {/*
      <Text>Please enter a value from 1 to 10:</Text>
      <TextInput
        type="integer" 
        style={styles.input}
        onChange={this.handleLevelChange} 
        defaultValue={this.state.new_level}
      /> 
      */}
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => {
          this.setModalVisible(true);
          this.setModalAction("NewAlert");
          }
        }
      >
      <Text style={styles.textStyle}>Track This Moment</Text>
      </Pressable>

      <Button 
        label="Show || Hide Recent Alerts" 
        onPress={this.toggleHidden.bind(this)} 
      />
        {this.state.isAlertsVisible && 
          <FlatList
            style={styles.flatList}
            data={alertsData}
            renderItem={FormatListItem}
          />
        }
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
    return (
      <View>
        <Text>Total Count: {this.props.alertsCount}</Text>
      </View>
   ) 
  }
}

export class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {

    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>{this.props.label}</Text>
        </View>
      </TouchableOpacity>
    )
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
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    backgroundColor: '#776677',
    padding: 1,
    borderRadius: 10,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalButton: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  modalButtonOpen: {
    backgroundColor: "#F194FF",
  },
  modalButtonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

// managed entry-point for app: https://reactnative.dev/docs/appregistry
AppRegistry.registerComponent('Fire', () => UserAlerts);

