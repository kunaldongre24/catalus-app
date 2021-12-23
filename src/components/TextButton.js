import React from "react";
import { StyleSheet, Text, Pressable } from "react-native";

export default function TextButton({ title, style, onPress }) {
  return (
    <Pressable style={[style, styles.button]}>
      <Text style={styles.buttonText} onPress={onPress}>
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {},
});
