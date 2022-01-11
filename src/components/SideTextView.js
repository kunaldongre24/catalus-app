import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";

export default function ListItem({ title, source, chapters }) {
  return chapters.length ? (
    <View
      style={{
        overflow: "hidden",
        paddingHorizontal: 15,
      }}
    >
      <Pressable
        style={styles.menuItem}
        android_ripple={{ color: "rgba(0,0,0,0.06)" }}
      >
        <Image
          fadeDuration={0}
          resizeMode="contain"
          style={styles.image}
          source={source}
        />
        <View style={{ padding: 12, flex: 1, paddingVertical: 12 }}>
          <Text
            style={{
              color: "#ddd",
              fontSize: 14,
              fontFamily: "Poppins",
              lineHeight: 20,
            }}
          >
            {title}
          </Text>
          <Text
            style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}
            numberOfLines={1}
          >
            {chapters.length}
            {" chapters • "}
            {chapters.map((chapter) => chapter.name).join(", ")}
          </Text>
        </View>
      </Pressable>
    </View>
  ) : (
    <View></View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 48,
    width: 48,
    backgroundColor: "rgba(255,255,255,0.06)",
  },

  menuItem: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
