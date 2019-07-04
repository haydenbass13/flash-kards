import React from "react";
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Button,
  TouchableOpacity,
  ScrollView
} from "react-native";
import _ from "lodash";

import Folder from "./Folder";
import Manage from "./ManageCards";

const models = require("../utils/models");

class Study extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: this.props.categories || []
    };
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <Text>{this.props.category[0]}</Text>
        </View>
        <Button
          title="Back to all cards"
          onPress={() => this.props.toggleScreen(Manage)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  },
  head: {
    flex:1
  }
});
export default Study;
