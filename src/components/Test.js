import React, { Component } from "react";
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Collapsible from "react-native-collapsible";

export default class App extends Component {
  state = {
    collapsed: true,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  render() {
    const {} = this.state;

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingTop: 30 }}>
          <TouchableOpacity onPress={this.toggleExpanded}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Single Collapsible</Text>
            </View>
          </TouchableOpacity>
          <Collapsible collapsed={this.state.collapsed} align="center">
            <View style={styles.content}>
              <Text>
                Bacon ipsum dolor amet chuck turducken landjaeger tongue spare
                ribs
              </Text>
            </View>
          </Collapsible>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
  },
});
