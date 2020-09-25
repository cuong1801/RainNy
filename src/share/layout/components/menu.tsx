import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "../style/index";

class NameScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is the NamessScreen.</Text>
      </View>
    );
  }
}

export default NameScreen; // e.g. DetailScreen
