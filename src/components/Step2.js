import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Switch } from "react-native";
import OptionHeader from "../components/OptionHeader";
import SideTextView from "../components/SideTextView";

export default function Step1(props) {
  const { selectedChapter, toggleVoiceChat, isVoiceChatEnabled } = props;
  const toggleSwitch = () => toggleVoiceChat((previousState) => !previousState);
  const chemistry = selectedChapter.filter((a) => a.subject_id === 1);
  const physics = selectedChapter.filter((a) => a.subject_id === 2);
  const maths = selectedChapter.filter((a) => a.subject_id === 3);
  const biology = selectedChapter.filter((a) => a.subject_id === 4);
  var chapterCount = 0;
  for (var i = 1; i <= 4; i++) {
    if (selectedChapter.filter((a) => a.subject_id === i).length) {
      chapterCount++;
    }
  }
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={{ paddingBottom: 131, padding: 15 }}>
          <Text style={styles.heading}>
            <Text style={styles.highlight}>
              {selectedChapter.length} Chapter
              {selectedChapter.length > 1 && "s"}
            </Text>{" "}
            selected in total from{" "}
            <Text style={styles.highlight}>
              {chapterCount} Subject{chapterCount > 1 && "s"}.
            </Text>
          </Text>
          <View
            style={{
              paddingTop: 10,
              marginHorizontal: -15,
              borderBottomColor: "#191919",
              borderBottomWidth: 1,
              paddingBottom: 5,
            }}
          >
            <OptionHeader
              title={"SELECTED CHAPTERS"}
              style={{ color: "#aaa" }}
            />
            <SideTextView
              title={"CHEMISTRY"}
              value={1}
              source={require("../assets/chemistry.png")}
              chapters={chemistry}
            />
            <SideTextView
              title={"PHYSICS"}
              value={2}
              source={require("../assets/physics.png")}
              chapters={physics}
            />
            <SideTextView
              title={"MATHS"}
              value={3}
              source={require("../assets/maths.png")}
              chapters={maths}
            />
            <SideTextView
              title={"BIOLOGY"}
              value={4}
              source={require("../assets/biology.png")}
              chapters={biology}
            />
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Text style={[styles.heading, { color: "#eee" }]}>Voice Chat</Text>
            <Switch
              trackColor={{ false: "#666", true: "#1c4d78" }}
              thumbColor={isVoiceChatEnabled ? "#3897f1" : "#eee"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isVoiceChatEnabled}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  content: {
    width: "100%",
  },
  heading: {
    color: "rgba(255,255,255,0.6)",
    fontSize: 14,
    fontFamily: "Poppins",
  },
  highlight: {
    color: "#eee",
  },
});
