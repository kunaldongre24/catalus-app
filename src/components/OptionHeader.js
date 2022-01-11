import React from "react";
import { Text } from "react-native";

const OptionHeader = ({ title, style }) => {
  return (
    <Text
      style={[
        {
          paddingHorizontal: 15,
          paddingVertical: 12,
          fontSize: 14,
          width: "100%",
          backgroundColor: "#000000",
          color: "#fff",
          fontFamily: "PoppinsSemibold",
        },
        style,
      ]}
      numberOfLines={1}
    >
      {title}
    </Text>
  );
};

export default OptionHeader;
