import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, useColorScheme } from 'react-native';


export default class Button extends Component {
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
