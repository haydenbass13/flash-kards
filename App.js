//dependencies
import React from "react";
import { StyleSheet, Text, View, AsyncStorage, Button } from "react-native";
import t from "tcomb-form-native";

//utilities


//components
import CreateCategory from "./components/CreateCategory";

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
      currentScreen: CreateCategory
    };
  }

  render() {
    let Comp = this.state.currentScreen;
    return (
      <View style={styles.container}>
        <Comp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});

export default App;
