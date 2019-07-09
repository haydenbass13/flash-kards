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

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studyMode: this.props.studyMode,
      flipped: null
    };
  }
  render() {
    const colors = {
      easy: "#4CAF50",
      medium: "#FFEB3B",
      hard: "#F44336",
      unrated: "#2196F3"
    };
    console.log(this.props);
    return (
      <TouchableOpacity
        style={{
          ...styles.card,
          height: this.props.height,
          backgroundColor: colors[this.props.diff]
        }}
        onPress={() => this.props.editCard(this.props)}
      >
        <View style={styles.textWrapper}>
          <View style={{ backgroundColor: "white" }}>
            <Text style={styles.textHeader}>Front: </Text>
            <Text style={{ ...styles.text, ...styles.q }}>
              {/* {this.props.data.Q} */}
            </Text>
            {!this.state.studyMode ? (
              <Text style={styles.textHeader}>Back: </Text>
            ) : null}
            {!this.state.studyMode && !this.state.flipped ? (
              <Text style={{ ...styles.text, ...styles.q }}>
                {JSON.stringify(this.props.data)}
              </Text>
            ) : null}
          </View>
        </View>
        <View
          style={{ ...styles.diff, backgroundColor: colors[this.props.diff] }}
        />
      </TouchableOpacity>
    );
  }
}
//change the background color of the card to props
//make the background of the text area white and cover 95% of the card, float left to expost card color on the right

export default Card;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 2,
    margin: 10,
    borderRadius: 5,
    borderColor: "#f0f0f0",
    // padding: 10,
    flexDirection: "row"
    // backgroundColor: "rgba(255, 255, 136, 0.2)"
  },
  text: {
    fontSize: 25,
    margin: 10
  },
  textHeader: {
    fontSize: 20,
    marginTop: 10,
    marginHorizontal: 10
  },
  textWrapper: {
    height: "100%",
    width: "95%"
  },
  q: {},
  a: {}
});
