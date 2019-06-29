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

const models = require("../utils/models");

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }
  async componentDidMount() {
    const categories = await models._getAllCategories();
    let array = [];
    for (var i = 0; i < categories.length; i++) {
      let temp = JSON.parse(categories[i][1]);
      array.push([JSON.parse(categories[i][0]), JSON.parse(categories[i][1])]);
    }
    array = array.sort((a,b) => a[0] > b[0])
    this.setState({ categories: array });
  }
  s;

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.categories.map((el, i) => {
          return (
            <TouchableOpacity key={i}>
              <Folder name={el[0]} color={el[1].color} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  }
});
export default Categories;
