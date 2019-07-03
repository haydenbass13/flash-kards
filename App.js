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
import Manage from "./components/ManageCards";
import NewCard from "./components/NewCard";
import Progress from "./components/Progress";
import Study from "./components/Study";
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
      selectedCategory: null
    };
    this.toggleScreen = this.toggleScreen.bind(this);
    this.setCategory = this.setCategory.bind(this);
    this.setScreen = this.setScreen.bind(this);
  }

  toggleScreen(screen) {
    this.setState({ currentScreen: screen });
  }

  setCategory(category) {
    this.setState({ selectedCategory: category });
  }
  setScreen(screen) {
    // let prev = this.state.currentScreen;
    this.setState({ currentScreen: screen });
  }

  async componentDidMount() {
    console.log("mounted app making request");
    const categories = await models._getAllCategories();
    let array = [];
    for (var i = 0; i < categories.length; i++) {
      let temp = JSON.parse(categories[i][1]);
      array.push([JSON.parse(categories[i][0]), JSON.parse(categories[i][1])]);
    }
    array = array.sort((a, b) => a[0] > b[0]);
    this.setState({ categories: array });
  }

  // async componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevState.categories &&
  //     prevState.categories.length !== this.state.categories.length
  //   ) {
  //     const categories = await models._getAllCategories();
  //     let array = [];
  //     for (var i = 0; i < categories.length; i++) {
  //       let temp = JSON.parse(categories[i][1]);
  //       array.push([
  //         JSON.parse(categories[i][0]),
  //         JSON.parse(categories[i][1])
  //       ]);
  //     }
  //     array = array.sort((a, b) => a[0] > b[0]);
  //     this.setState({ categories: array });
  //   }
  // }

  render() {
    let Comp = this.state.currentScreen;
    return (
      <View style={styles.container}>
        <Comp
          category={this.state.selectedCategory}
          setCategory={this.setCategory}
          toggleScreen={this.toggleScreen}
          categories={this.state.categories}
          setScreen={this.setScreen}
        />
        {/* <Button title="delete all" onPress={() => models._deleteAll()} /> */}
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
