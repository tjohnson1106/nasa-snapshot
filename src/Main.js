import React, { Component } from "react";
import { View, Text, StyleSheet, Image, Webview } from "react-native";

import { api } from "./utils/api";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      picture: "",
      explanation: "",
      date: "",
      media: ""
    };
  }
  render() {
    return (
      <View>
        <Text>Main Component</Text>
      </View>
    );
  }
}

export default Main;
