import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Error({ children, style, ...props }) {
  return (
    <Text {...props} style={[style, styles.text]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#D33C30",
  },
});
