import React, { useState } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import Collapsible from "react-native-collapsible";
import Subelement from "./Subelement";
import InsetShadow from "react-native-inset-shadow";

export default function ListItem({
  title,
  style,
  selectedChapter,
  onPress,
  value,
  source,
  imageStyle,
  textStyle,
  subHeading,
  listItems,
  selectAll,
  checkAllSelected,
}) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <View style={{ overflow: "hidden" }}>
      <Pressable
        style={styles.menuItem}
        android_ripple={{ color: "rgba(0,0,0,0.06)" }}
        onPress={() => {
          setIsCollapsed(!isCollapsed);
        }}
      >
        <View style={{ padding: 15, flex: 1 }}>
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
          <Text
            style={{ color: "#777", fontFamily: "Poppins", fontSize: 13 }}
            numberOfLines={1}
          >
            {subHeading}
          </Text>
        </View>

        <Image
          fadeDuration={0}
          resizeMode="contain"
          style={[styles.image, imageStyle]}
          source={source}
        />
        {!isCollapsed && (
          <View
            style={{
              height: 13,
              width: 13,
              position: "absolute",
              borderWidth: 0,
              transform: [
                { translateX: 33 },
                { translateY: 52 },
                { rotate: "135deg" },
              ],
              backgroundColor: "#21201e",
            }}
          >
            <InsetShadow
              shadowOpacity={1}
              shadowRadius={7}
              elevation={3}
              top={false}
              right={false}
              containerStyle={{ overflow: "hidden" }}
            >
              <View></View>
            </InsetShadow>
          </View>
        )}
      </Pressable>

      <Collapsible
        collapsed={isCollapsed}
        align="center"
        align={"top"}
        duration={100}
        easing={"easeInOut"}
      >
        <Subelement
          title={"Select All"}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "rgba(255,255,255,0.01)",
          }}
          selectChapter={() => selectAll(listItems)}
          selected={checkAllSelected}
        />
        {listItems.map((x) => {
          return (
            <Subelement
              key={x.id}
              value={x.id}
              selectChapter={() => onPress(x)}
              selected={selectedChapter.includes(x)}
              title={x.name}
            />
          );
        })}
      </Collapsible>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 80,
    width: 80,
  },

  menuItem: {
    width: "100%",
    height: 105,
    marginTop: 3,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#121212",
    padding: 15,
    paddingRight: 30,
    elevation: 3,
  },
});
