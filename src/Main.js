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

  componentDidMount() {
    api
      .nasaPics()
      .then((res) => {
        this.setState({
          title: res.title,
          picture: res.picture,
          explanation: res.explanation,
          date: res.data,
          media: res.media_type
        });
      })
      .catch((error) => {
        console.log(error);
      });
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
