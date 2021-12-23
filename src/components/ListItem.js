import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

export default function ListItem({
  title,
  style,
  onPress,
  source,
  info,
  imageStyle,
  textStyle,
}) {
  return (
    <View style={[style, styles.boxStyle]}>
      <Text
        style={[
          {
            color: "#fff",
            fontFamily: "Poppins",
            fontSize: 13,
          },
          textStyle,
        ]}
      >
        {title}
      </Text>
      <Image
        fadeDuration={0}
        resizeMode="contain"
        style={[styles.image, imageStyle]}
        source={source}
      />
      {info ? <Text style={styles.info}>{info}</Text> : <Text></Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 35,
  },
  info: {
    color: "rgba(255,255,255,0.8)",
    fontFamily: "PoppinsSemibold",
    fontSize: 18,
  },

  notification: {
    color: "#fff",
    backgroundColor: "#F56526",
    position: "absolute",
    top: 6,
    right: 0,
    borderRadius: 1,
    paddingHorizontal: 5,
    textAlign: "right",
    minWidth: 25,
    textAlign: "center",
    fontFamily: "Poppins",
  },
  boxStyle: {
    display: "flex",
    justifyContent: "space-evenly",
  },
});
