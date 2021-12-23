import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../contexts/UserContext";
export default function ResultScreen() {
  const user = React.useContext(UserContext);

  return <SafeAreaView style={styles.container}></SafeAreaView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  menuItem: {
    width: "48%",
    height: 120,
    margin: "1%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#fff",
    elevation: 2,
  },
  menu: {
    width: "100%",
    justifyContent: "space-between",
    flexWrap: "wrap",
    flexDirection: "row",
    padding: 10,
  },
  textStyle: {
    color: "#555",
  },
  gheading: {
    paddingHorizontal: 10,
    marginTop: 10,
    color: "#555",
    fontFamily: "PoppinsSemibold",
  },
  chartContainer: {
    paddingTop: 10,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 4,
    elevation: 2,
  },
});
