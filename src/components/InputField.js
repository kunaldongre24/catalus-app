import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function InputField({ style, ...props }) {
  return <TextInput {...props} style={[style, styles.input]} />;
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    color: "#000",
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#fafafa",
    paddingHorizontal: 15,
  },
});
