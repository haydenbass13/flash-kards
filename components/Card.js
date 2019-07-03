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
    return (
      <View>
        <View
          style={{ ...styles.card, height: this.props.height }}
        >
          <Text style={styles.textHeader}>Front: </Text>
          <Text style={{ ...styles.text, ...styles.q }}>
            {this.props.data.Q}
          </Text>
          {!this.state.studyMode ? (
            <Text style={styles.textHeader}>Back: </Text>
          ) : null}
          {!this.state.studyMode && !this.state.flipped ? (
            <Text style={{ ...styles.text, ...styles.q }}>
              {this.props.data.A}
            </Text>
          ) : null}
        </View>
      </View>
    );
  }
}

export default Card;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderStyle: "solid",
    borderWidth: 1,
    margin: 10,
    borderRadius: 5,
    padding: 10
    // backgroundColor: "rgba(255, 255, 136, 0.2)"
  },
  text: {
    fontSize: 25,
    marginVertical: 10
  },
  textHeader: {
    fontSize: 20
  },
  q: {},
  a: {}
});
