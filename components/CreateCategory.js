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
import _ from "lodash";

//utilities
import _createCategory from "../utils/models";

//components
import Folder from "./Folder";

//config
const Form = t.form.Form;

const Category = t.struct({
  name: t.String
});

class CreateCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "rgba(178,34,34,1)"
    };
    this.create = this.create.bind(this);
    this.click = this.click.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  create = () => {
    const value = this._form.getValue(); // use that ref to get the form value
    let categoryObj = {
      name: value.name,
      config: {
        easy: [],
        medium: [],
        hard: [],
        unrated: [],
        color: this.state.color
      }
    };
    _createCategory(categoryObj);
  };

  click(color, e) {
    this.setState({ color });
  }

  handleChange() {
    const value = this._form.getValue();
    this.setState({ name: value });
  }

  render() {
    let colors = [
      "rgba(178,34,34,1)",
      "rgba(255,140,0,1)",
      "rgba(255,215,0,1)",
      "rgba(30, 130, 76, 1)",
      "rgba(83, 51, 237, 1)",
      "rgba(103, 65, 114, 1)",
      "rgba(46, 49, 49, 1)",
      "rgba(218, 223, 225, 1)"
    ];
    return (
      <View style={styles.container}>
        <Folder name={this.state.name} color={this.state.color} />
        <View>
          <View style={styles.formContainer}>
            <Form
              type={Category}
              ref={c => (this._form = c)}
              options={categoryOptions}
              value={this.state.name}
              onChange={this.handleChange}
            />
          </View>
          <View style={styles.colorContainer}>
            {colors.map((el, i) => {
              return (
                <TouchableOpacity
                  key={i}
                  style={{ ...styles.colorSelect, backgroundColor: el }}
                  onPress={() => this.click(el)}
                />
              );
            })}
          </View>
        </View>
        <Button title="Create" onPress={this.create} />
      </View>
    );
  }
}

// const Click = props => {
//   const clicked = e => {
//     console.log(e);
//   };
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: 10,
  },
  formContainer: {
    alignSelf: "stretch"
  },
  colorContainer: {
    flexDirection: "row",
    justifyContent: "center",
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
  },
  colorSelect: {
    height: 40,
    width: 40,
    marginHorizontal: 5,
    borderRadius: 5
  },
  form: {
  }
});
const categoryOptions = {
  fields: {
    name: {
      error: "This field cannot be left blank"
    }
  }
};

export default CreateCategory;
