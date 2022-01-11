import React from "react";
import { Pressable, Text, View } from "react-native";

const OptionButton = ({ title, info, style, onPress, hideOverflow }) => {
  return (
    <Pressable onPress={onPress} android_ripple={{ color: "rgba(0,0,0,0.1)" }}>
      <View
        style={{
          paddingHorizontal: 15,
          paddingRight: 20,
          paddingVertical: 12,
          width: "100%",
          borderBottomWidth: 1,
          borderBottomColor: "#222",
          backgroundColor: "#121212",
          color: "#222",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={[
            {
              fontSize: 14,
              maxWidth: info && hideOverflow ? "30%" : "100%",
              fontFamily: "Poppins",
            },
            style,
          ]}
          numberOfLines={1}
        >
          {title}
        </Text>
        <Text
          style={{
            color: "#666",
            fontSize: 14,
            maxWidth: "70%",
            fontFamily: "Poppins",
          }}
          numberOfLines={1}
        >
          {info}
        </Text>
      </View>
    </Pressable>
  );
};

export default OptionButton;
