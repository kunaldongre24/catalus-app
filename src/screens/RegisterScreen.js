import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Signup from "../components/Signup";
import StatusBar from "../components/StatusBar";

export default function RegisterScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Signup />
      </View>

      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    paddingVertical: 40,
  },
  header: {
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
