import React from "react";
import { StyleSheet, Pressable, Text, ActivityIndicator } from "react-native";

export default function FilledButton({
  title,
  style,
  onPress,
  isLoading,
  isDisabled,
}) {
  return (
    <Pressable
      style={[style, styles.button, isDisabled ? styles.disabled : styles.btn]}
      onPress={onPress}
      disabled={isDisabled}
      android_ripple={{ color: "rgba(0,0,0,0.2)" }}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  disabled: {
    backgroundColor: "#7fc3eb",
  },
  btn: {
    backgroundColor: "#1174ad",
  },
});
