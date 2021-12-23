import React from "react";
import { View, Text, Image, Pressable } from "react-native";

export default function Subelement({
  title,
  value,
  style,
  selected,
  selectChapter,
}) {
  return (
    <Pressable
      style={[
        {
          display: "flex",
          justifyContent: "space-between",
          paddingRight: 25,
          paddingLeft: 15,
          paddingVertical: 12,
          backgroundColor: "#21201e",
          flexDirection: "row",
        },
        style,
      ]}
      onPress={() => selectChapter()}
    >
      <View
        style={{
          paddingHorizontal: 10,
          paddingRight: 20,
          paddingVertical: 12,
          marginTop: -12,
          marginBottom: -12,
        }}
      >
        <View
          style={{
            borderRadius: 4,
            height: 20,
            width: 20,
            borderWidth: 2,
            borderColor: "rgba(255,255,255,0.2)",
            overflow: "hidden",
          }}
        >
          {selected && (
            <Image
              fadeDuration={0}
              resizeMode="contain"
              source={require("../assets/tick.png")}
              style={{ width: "100%", tintColor: "#1174ad", height: "100%" }}
            />
          )}
        </View>
      </View>
      <Text style={{ fontSize: 16, color: "rgba(255,255,255,0.6)", flex: 1 }}>
        {title}
      </Text>
    </Pressable>
  );
}
