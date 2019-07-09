//dependencies
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Button,
  TouchableOpacity,
  Image
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
const loader = require('./assets/loader.gif')

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
      loading: true
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
    return this.setState({ categories: array, loading: false });
  }

  render() {
    let Comp = this.state.currentScreen;
    return (
      <View style={styles.container}>
        {/* <Image source={loader} /> */}
        {this.state.loading ? (
          <Image source={"./assets/loader.gif"} />
        ) : null}
        {!this.state.loading ? (
          <Comp
            category={this.state.selectedCategory}
            setCategory={this.setCategory}
            toggleScreen={this.toggleScreen}
            categories={this.state.categories}
            setScreen={this.setScreen}
            editCard={this.editCard}
          />
        ) : null}
        <Button title="delete all" onPress={() => models._deleteAll()} />
        <View style={styles.nav}>
          <Button
            title="New Category"
            onPress={() => this.toggleScreen(CreateCategory)}
          />
          <Button
            title="Categories"
            onPress={() => this.toggleScreen(Categories)}
          />
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
    height: 50,
    flexDirection: "row",
    alignItems: "flex-start",
    lineHeight: 50,
    justifyContent: "space-evenly",
    backgroundColor: '#fcfcfc'
  }
});

export default App;
