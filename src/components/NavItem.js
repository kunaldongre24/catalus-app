import React from "react";
import { Pressable, Text, Image, StyleSheet } from "react-native";

export default function NavItem(props) {
  const { title, imageSource, onPress } = props;
  return (
    <Pressable
      onPress={() => onPress()}
      style={{
        width: "100%",
        alignItems: "center",
        borderBottomColor: "rgba(255,255,255,0.1)",
        borderBottomWidth: 1,
        padding: 7,
      }}
    >
      <Image
        resizeMode="contain"
        style={styles.imageStyle}
        source={imageSource}
      />
      <Text style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
        {title}
      </Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  imageStyle: {
    width: "100%",
    height: 55,
  },
});
