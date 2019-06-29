//dependencies
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";

//utilities

//components
import Folder from "./Folder";
const models = require("../utils/models");

//config

class Manage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UID: this.props.category[0],
      config: this.props.category[1]
    };
  }

  async componentDidMount() {
    let category = await models._getOne(JSON.stringify(this.props.category));
    console.log(category);
  }

  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <Folder
            fontSize={20}
            size={100}
            color={this.props.category[1].color}
            name={this.state.UID}
            marginTop={90}
          />
        </View>
        <View />
        <ScrollView contentContainerStyle={styles.cards}>
          <TextInput>{JSON.stringify(this.state.config)}</TextInput>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
    // backgroundColor: "#fff",
    // // alignItems: "center",
    // justifyContent: "center"
  },
  head: {
    // flex: 1,
    // flexDirection: 'column',
    // position: 'absolute',
    justifyContent: "center",
    // alignItems: 'center',
    // justifyContent: 'flex-start',
    height: 150
  },
  cards: {
    // flex: 2,
    // justifyContent: "center"
    // alignItems: 'center'
  },
  headText: {
    alignSelf: "center"
    // position: 'absolute'
  },
  folder: {
    alignSelf: "center"
  }
});

export default Manage;
