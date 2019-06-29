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
  let title = props.name
    ? !props.name.name
      ? props.name
      : "Category Name"
    : props.name;
  let color = props.color.slice(0, props.color.length - 2) + "0.8)";
  return (
    <View style={{ ...styles.container }}>
      <View style={styles.folderContainer}>
        <View style={{ marginBottom: -250 }}>
          <SvgUri
            width={props.size}
            height={props.size}
            source={require("../assets/folderheader.svg")}
            fill="black"
          />
        </View>
        <View style={{ marginBottom: -250 }}>
          <SvgUri
            width={props.size}
            height={props.size}
            source={require("../assets/folderheader.svg")}
            fill={color}
          />
        </View>
        <SvgUri
          width={props.size}
          height={props.size}
          source={require("../assets/folder.svg")}
          fill={props.color}
        />
      </View>
      <View style={{...styles.textContainer, marginTop: props.marginTop}}>
        <Text style={{...styles.text, fontSize: props.fontSize}}>{title}</Text>
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
    elevation: 1,
    // marginBottom: 0
  },
  textContainer: {
    width: 230,
    height: "auto",
  },
  text: {
    alignItems: "center",
    textAlign: "center",
    fontFamily: "HelveticaNeue-ThinItalic"
  }
});

export default Folder;
