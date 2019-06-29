//dependencies
import React from "react";
import { StyleSheet, Text, View, AsyncStorage, Button } from "react-native";
import t from "tcomb-form-native";

//utilities

//components
import CreateCategory from "./components/CreateCategory";
import Categories from "./components/Categories";
const models = require('./utils/models')

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
      currentScreen: Categories
    };
    this.toggleScreen = this.toggleScreen.bind(this)
  }

  toggleScreen() {
    if (this.state.currentScreen === Categories) {
      this.setState({currentScreen: CreateCategory})
    }
    else this.setState({currentScreen: Categories})
  }

  render() {
    let Comp = this.state.currentScreen;
    return (
      <View style={styles.container}>
        <Comp />
        {/* <Button title="ClearAll" onPress={() => models._deleteAll()} /> */}
        <Button title="Toggle" onPress={this.toggleScreen} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default App;
