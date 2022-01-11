import React from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

export default function ListItem({
  title,
  style,
  onPress,
  source,
  imageStyle,
  textStyle,
  subHeading,
}) {
  return (
    <Pressable
      android_ripple={{ color: "rgba(255,255,255,0.1)" }}
      style={styles.pressable}
      onPress={onPress}
    >
      <View style={style}>
        <Image
          fadeDuration={0}
          resizeMode="contain"
          style={[styles.image, imageStyle]}
          source={source}
        />
        <View style={{ padding: 15 }}>
          <Text
            style={[
              {
                color: "rgba(255, 255, 255, 0.7)",
                fontSize: 16,
                fontFamily: "PoppinsSemibold",
              },
              textStyle,
            ]}
          >
            {title}
          </Text>
          <Text style={{ color: "#777" }} numberOfLines={1}>
            {subHeading}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
  },
  pressable: {
    overflow: "hidden",
    marginBottom: 10,
    backgroundColor: "#121212",
    borderRadius: 6,
  },
});
