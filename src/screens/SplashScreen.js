import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        fadeDuration={0}
        source={require("../assets/logo.png")}
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 5,
  },
});
