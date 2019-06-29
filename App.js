//dependencies
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Button,
  TouchableOpacity
} from "react-native";
import t from "tcomb-form-native";

//utilities

//components
import CreateCategory from "./components/CreateCategory";
import Categories from "./components/Categories";
import Manage from './components/ManageCards';
const models = require("./utils/models");

//config
const Form = t.form.Form;

const Category = t.struct({
  name: t.String
});

const categoryOptions = {
  fields: {
    name: {
      error: "This field cannot be left blank"
    }
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: Categories,
      selectedCategory: null,
    };
    this.toggleScreen = this.toggleScreen.bind(this);
    this.setCategory = this.setCategory.bind(this)
  }

  toggleScreen(screen) {
    this.setState({ currentScreen: screen });
  }

  setCategory(category) {
    this.setState({selectedCategory: category, currentScreen: Manage})
  }

  render() {
    let Comp = this.state.currentScreen;
    return (
      <View style={styles.container}>
        <Comp category={this.state.selectedCategory} setCategory={this.setCategory}/>
        {/* <Button title="ClearAll" onPress={() => models._deleteAll()} /> */}
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => this.toggleScreen(CreateCategory)}>
            <Text>New Category</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.toggleScreen(Categories)}>
            <Text>Categories</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center"
  },
  nav: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    lineHeight: 70,
    justifyContent: "space-evenly"
  }
});

export default App;
