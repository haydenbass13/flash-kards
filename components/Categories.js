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
import Manage from './ManageCards'

const models = require("../utils/models");

class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: this.props.categories || []
    };
  }
  async componentDidMount() {
    const categories = await models._getAllCategories();
    let array = [];
    for (var i = 0; i < categories.length; i++) {
      let temp = JSON.parse(categories[i][1]);
      array.push([JSON.parse(categories[i][0]), JSON.parse(categories[i][1])]);
    }
    array = array.sort((a, b) => a[0] > b[0]);
    this.setState({ categories: array });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.categories.map((el, i) => {
          // console.log(el, '--------');
          return (
            <TouchableOpacity
              key={i}
              onPress={() => {
                this.props.setCategory(el)
                this.props.setScreen(this.props.nextScreen || Manage)
              }
            }
            >
              <Folder
                fontSize={30}
                size={250}
                name={el[0]}
                color={el[1].color}
                marginTop={-40}
              />
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
