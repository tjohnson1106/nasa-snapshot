import React, { Component } from "react";
import { View, Text, StyleSheet, Image, WebView, ScrollView } from "react-native";

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
          picture: res.url,
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
      <View style={styles.root}>
        <Text style={styles.text}>{this.state.date}</Text>
        <Text style={styles.text}>{this.state.title}</Text>
        {this.state.media === "video" ? (
          <WebView
            javascriptEnabled={true}
            source={{ url: this.state.picture }}
            style={{ width: 370, height: 200 }}
          />
        ) : (
          <Image
            source={{ url: this.state.picture }}
            style={{ width: 370, height: 200 }}
          />
        )}
        <Text style={styles.text}>{this.state.explanation}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000"
  },
  text: {
    color: "#fff",
    fontSize: 15,
    padding: 10
  }
});

export default Main;
