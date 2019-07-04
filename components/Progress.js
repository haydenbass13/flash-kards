import PieChart from "react-native-pie-chart";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  Button,
  TouchableOpacity,
  Dimensions,
  AppRegistry,
  ScrollView,
  StatusBar
} from "react-native";

import Folder from "./Folder";
import Manage from './ManageCards'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    justifyContent: 'space-evenly'
  },
  head: {
    justifyContent: "center",
    height: 150
  },
  title: {
    fontSize: 24,
    margin: 10
  },
  chartContainer: {
    flex: 1,
    alignItems: "center"
  },
  legendContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20
  },
  colorBox: {
    width: 20,
    height: 20,
    marginHorizontal: 5
    // alignSelf: 'flex-start'
  },
  legend: {
    flex: 1,
    flexDirection: "row",
    padding: 5,
  }
});
class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // console.log(this.props.categories[0], "progress");
  }

  render() {
    // console.log(this.props)
    const category = this.props.category;
    console.log(category, 'categoryyyyyyyyyyy')
    const chart_wh = 250;
    const series = [
      category[1].easy.length || null,
      category[1].medium.length || null,
      category[1].hard.length || null,
      category[1].unrated.length || null
    ];
    const sliceColor = ["#4CAF50", "#FFEB3B", "#F44336", "#2196F3"];
    const levels = ["Easy", "Medium", "Hard", "Unrated"];
    return (
      <View style={styles.container}>
        <View style={styles.head}>
          <Folder
            fontSize={20}
            size={100}
            color={category[1].color}
            name={category[0]}
            marginTop={90}
          />
        </View>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.chartContainer}>
            <Text style={styles.title}>Difficulty Ranking</Text>
            <PieChart
              chart_wh={chart_wh}
              series={series}
              sliceColor={sliceColor}
              doughnut={true}
              coverRadius={0.45}
              coverFill={"#FFF"}
            />
          </View>
          <View style={styles.legendContainer}>
            {levels.map((el, i) => {
              return (
                <View key={i} style={styles.legend}>
                  <View
                    style={{
                      ...styles.colorBox,
                      backgroundColor: sliceColor[i]
                    }}
                  />
                  <Text>{el}</Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
        <Button title="Back to all cards" onPress={() => this.props.toggleScreen(Manage)}/>
      </View>
    );
  }
}

export default Progress;
