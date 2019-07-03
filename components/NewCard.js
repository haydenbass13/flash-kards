import React from "react";
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Button,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert
} from "react-native";

import Folder from "./Folder";
import Manage from './ManageCards'
import { NativeModulesProxy } from "@unimodules/core";

const models = require('../utils/models')

class NewCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UID: this.props.category[0],
      config: this.props.category[1],
      question: 'Front',
      answer: 'Back'
    };
    this.submit = this.submit.bind(this)
  }

  async submit() {
    let config = this.state.config;
    let id = config.easy.length + config.medium.length + config.hard.length + config.unrated.length;
    config.unrated.push({id, Q: this.state.question, A: this.state.answer})
    let card = {
      config, name: this.state.UID
    }
    // console.log(card)
    await models._update(card)
    Alert.alert(
      'Add another card?',
      '',
      [{text: 'Yes', onPress: this.setState({question: 'Front', answer: "Back"})}, {text: 'NO',onPress: () => this.props.toggleScreen(Manage)}]
    )

  }

  componentDidMount() {
    // console.log(this.props);
  }
  render() {
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
        <View>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={question => this.setState({ question })}
            placeholder={this.state.question}
          />
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={answer => this.setState({ answer })}
            placeholder={this.state.answer}
          />
        </View>
        <TouchableOpacity onPress={this.submit}>
          <Text>Add</Text>
        </TouchableOpacity>
        <View />
        <Button title="Back to all cards" onPress={() => this.props.toggleScreen(Manage)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  head: {
    justifyContent: "center",
    height: 150
  },
  
});

export default NewCard;
