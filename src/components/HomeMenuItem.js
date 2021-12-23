import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

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
  );
}

const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
  },
});
