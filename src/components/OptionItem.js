import React from "react";
import { Text, View } from "react-native";

const OptionItem = ({ title, info, style, hideOverflow }) => {
  return (
    <View
      style={{
        paddingHorizontal: 15,
        paddingRight: 20,
        paddingVertical: 12,
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: "#222",
        backgroundColor: "#121212",
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
            color: "rgba(255,255,255,0.8)",
          },
          style,
        ]}
        numberOfLines={1}
      >
        {title}
      </Text>
      <Text
        style={{
          color: "rgba(255,255,255,0.7)",
          fontSize: 14,
          maxWidth: "70%",
          fontFamily: "Poppins",
        }}
        numberOfLines={1}
      >
        {info}
      </Text>
    </View>
  );
};

export default OptionItem;
