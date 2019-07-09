//dependencies
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

//utilities

//components
import Folder from "./Folder";
import NewCard from "./NewCard";
import Card from "./Card";
import Progress from "./Progress";
import Study from "./Study";
import EditCard from './EditCard'

const models = require("../utils/models");

//config

class Manage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      UID: this.props.category[0],
      config: this.props.category[1],
      edit: null
    };
    this.editCard = this.editCard.bind(this)
  }
  editCard(props) {
   return this.state.edit ? this.setState({edit: null}) : this.setState({edit: props})
  }
  componentDidMount() {
    if (
      this.state.config.easy.length === 0 &&
      this.state.config.hard.length === 0 &&
      this.state.config.medium.length === 0 &&
      this.state.config.unrated.length === 0
    ) {
      Alert.alert("No Cards Yet", "", [
        { text: "Add Cards", onPress: () => this.props.toggleScreen(NewCard) },
        { text: "OK" }
      ]);
    }
  }

  render() {
    let config = this.props.category[1];

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
        <View style={styles.buttons}>
          <Button
            title="Add Cards"
            onPress={() => this.props.toggleScreen(NewCard)}
          />
          {this.state.config.easy.length === 0 &&
          this.state.config.hard.length === 0 &&
          this.state.config.medium.length === 0 &&
          this.state.config.unrated.length === 0 ? null : (
            <Button
              title="Study"
              onPress={() => this.props.toggleScreen(Study)}
            />
          )}
          {this.state.config.easy.length === 0 &&
          this.state.config.hard.length === 0 &&
          this.state.config.medium.length === 0 &&
          this.state.config.unrated.length === 0 ? null : (
            <Button
              title="Progress"
              onPress={() => this.props.toggleScreen(Progress)}
            />
          )}
        </View>
        <View />
        {this.state.edit ? (<EditCard edit={this.state.edit} back={this.editCard} {...this.props} />) : 
        <ScrollView contentContainerStyle={styles.cards}>
          <View>
            {config.unrated.map((el, i) => {
              return (
                <Card
                  diff="unrated"
                  key={i}
                  data={el}
                  height={"auto"}
                  studyMode={false}
                  editCard={this.editCard}
                />
              );
            })}
          </View>
          <View>
            {config.easy.map((el, i) => {
              return (
                <Card
                  diff="easy"
                  key={i}
                  data={el}
                  height={"auto"}
                  studyMode={false}
                  editCard={this.editCard}
                />
              );
            })}
          </View>
          <View>
            {config.medium.map((el, i) => {
              return (
                <Card
                  diff="medium"
                  key={i}
                  data={el}
                  height={"auto"}
                  studyMode={false}
                  editCard={this.editCard}
                />
              );
            })}
          </View>
          <View>
            {config.hard.map((el, i) => {
              return (
                <Card
                  diff="hard"
                  key={i}
                  data={el}
                  height={"auto"}
                  studyMode={false}
                  editCard={this.editCard}
                />
              );
            })}
          </View>
        </ScrollView>}
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
  cards: {},
  headText: {
    alignSelf: "center"
  },
  folder: {
    alignSelf: "center"
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center"
    // height: 40,
    // marginBottom:20
  }
});

export default Manage;
