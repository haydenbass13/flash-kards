import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import React from "react";
import SvgUri from "react-native-svg-uri";

// class Folder extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state
//   }
// }

const Folder = props => {
  // console.log(props.name)
  let title = props.name ? props.name.name : "Category Name";
  let color = props.color.slice(0, props.color.length-2) + '0.8)';
  return (
    <View style={{ ...styles.container }}>
      <View style={styles.folderContainer}>
        <View style={{marginBottom:-250}}>
          <SvgUri
            width={250}
            height={250}
            source={require("../assets/folderheader.svg")}
            fill='black'
          />
        </View>
        <View style={{marginBottom:-250}}>
          <SvgUri
            width={250}
            height={250}
            source={require("../assets/folderheader.svg")}
            fill={color}
          />
        </View>
        <SvgUri
          width={250}
          height={250}
          source={require("../assets/folder.svg")}
          fill={props.color}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  folderContainer: {
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 1
  },
  textContainer: {
    width: 230,
    height: "auto",
    marginTop: -40
  },
  text: {
    alignItems: "center",
    textAlign: "center",
    fontSize: 30,
    fontFamily: "HelveticaNeue-ThinItalic"
  }
});

export default Folder;
