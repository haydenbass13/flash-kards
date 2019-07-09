import React from "react";
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Button,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert
} from "react-native";
import _ from "lodash";

import RadioGroup, { Radio } from "react-native-radio-input";

import Folder from "./Folder";
import Manage from "./ManageCards";
const models = require("../utils/models");

class EditCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UID: this.props.category[0],
      config: this.props.category[1],
      question: this.props.edit.data.Q,
      answer: this.props.edit.data.A,
      diff: this.props.edit.diff
    };
    this.submit = this.submit.bind(this);
  }
  async submit() {
    let config = this.state.config;
    let id = this.props.edit.data.id;
    if (this.state.diff !== this.props.edit.diff) {
      let newArr = []
      for (var i = 0; i < config[this.props.edit.diff].length; i++) {
        if (config[this.props.edit.diff][i].id !== id) {
          newArr.push(config[this.props.edit.diff][i]);
        }
      }
      config[this.props.edit.diff] = newArr
    }
    config[this.state.diff][this.props.edit.data.id] = {
      id,
      Q: this.state.question,
      A: this.state.answer
    };
    let card = {
      config,
      name: this.state.UID
    };
    console.log(card)
    await models._update(card);
    Alert.alert("Changes Submitted", "", [
      { text: "OK", onPress: this.props.back }
    ]);
  }
  getChecked = value => {
    this.setState({ diff: value });
  };
  render() {
    const colors = {
      easy: "#4CAF50",
      medium: "#FFEB3B",
      hard: "#F44336",
      unrated: "#2196F3"
    };
    // console.log("edit card props", this.props);
    return (
      <View style={styles.container}>
        {/* <Text>{JSON.stringify(this.props)}</Text> */}
        <View styles={styles.card}>
          <TextInput
            style={styles.text}
            onChangeText={question => this.setState({ question })}
            defaultValue={this.state.question}
          />
          <TextInput
            style={styles.text}
            onChangeText={answer => this.setState({ answer })}
            defaultValue={this.state.answer}
          />
          <Button title="Submit Changes" onPress={this.submit} />
        </View>
        <View style={styles.back}>
          <Button title="Back to all cards" onPress={this.props.back} />
        </View>
        <RadioGroup getChecked={this.getChecked}>
          <Radio label={"Easy"} value={"easy"} />
          <Radio label={"Medium"} value={"medium"} />
          <Radio label={"Hard"} value={"hard"} />
          <Radio label={"Unrated"} value={"unrated"} />
        </RadioGroup>
      </View>
    );
  }
}
//change the background color of the card to props
//make the background of the text area white and cover 95% of the card, float left to expost card color on the right

export default EditCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 2,
    margin: 10,
    borderRadius: 5,
    borderColor: "#f0f0f0",
    // padding: 10,
    flexDirection: "row"
    // backgroundColor: "rgba(255, 255, 136, 0.2)"
  },
  text: {
    fontSize: 25,
    margin: 10
  },
  textHeader: {
    fontSize: 20,
    marginTop: 10,
    marginHorizontal: 10
  },
  textWrapper: {
    height: "100%",
    width: "95%"
  },
  q: {},
  a: {}
});
