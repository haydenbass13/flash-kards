//dependencies
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Button,
  TouchableOpacity,
  TextInput
} from "react-native";

//utilities

//components
import Folder from './Folder'
const models = require('../utils/models')

//config

class Manage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  async componentDidMount() {
   let category = await models._getOne(JSON.stringify(this.props.category));
   console.log(category)
  }

  render() {
    return (
      <View style={styles.container}>
        <Folder color={this.props.color} name={this.props.name}/>
        <View>
          <TextInput></TextInput>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "#fff",
    // // alignItems: "center",
    // justifyContent: "center"
  },
});

export default Manage;
