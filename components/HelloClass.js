import React, { Component } from "react";
import { Text } from "native-base";

// using class component
export default class Print extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "default" };
  }
  render() {
    return (
      <Text>
        Hi {this.state.name} state then props: {this.props.name} from Print
        class component!
      </Text>
    );
  }
}
