import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
  BackHandler,
} from "react-native";
import Test from "../components/Test";
import Step1 from "../components/Step1";

export default function CreateNewRace(props) {
  const { newRace, setNewRace } = props;
  const [selectedChapter, setSelectedChapter] = useState([]);

  return (
    <Modal animationType="slide" visible={newRace}>
      <View style={styles.createRace}>
        <View style={styles.fixedHeader}>
          <Pressable
            onPress={() => {
              setNewRace(false);
            }}
          >
            <Image
              fadeDuration={0}
              source={require("../assets/back.png")}
              resizeMode={"contain"}
              style={styles.backArrow}
            />
          </Pressable>
          <Text
            style={{
              height: 30,
              color: "#fff",
              fontSize: 20,
              fontWeight: "bold",
              left: 0,
              flex: 1,
              textAlign: "center",
              marginRight: 50,
            }}
          >
            New Race
          </Text>
        </View>

        <Step1
          setSelectedChapter={setSelectedChapter}
          selectedChapter={selectedChapter}
        />
        <View
          style={[
            {
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            },
            styles.footer,
          ]}
        >
          <Pressable
            android_ripple={{ color: "rgba(0,0,0,0.1)" }}
            style={styles.btn}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Next
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  btn: {
    width: "100%",
    height: "100%",
    backgroundColor: "#1174ad",
    alignItems: "center",
    borderRadius: 6,
    justifyContent: "center",
  },
  line: {
    width: "75%",
    height: 4,
    backgroundColor: "#222",
    alignSelf: "center",
    marginTop: 40,
    marginBottom: -40,
  },

  selectIndicator: {
    height: 25,
    width: 25,
    borderRadius: 4,
    overflow: "hidden",
    borderWidth: 2,
    justifyContent: "center",
    marginRight: 5,
    alignItems: "center",
    borderColor: "rgba(255,255,255,0.3)",
  },
  itext: {
    textAlign: "center",
    height: 43,
    width: 43,
    lineHeight: 40,
    backgroundColor: "#116696",
    color: "#eee",
    fontWeight: "bold",
    fontSize: 25,
    borderWidth: 3,
    borderColor: "#222",
    borderRadius: 43,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 1,
  },
  tag: {
    color: "#fff",
    fontSize: 13,
    marginTop: 5,
    textAlign: "center",
    fontWeight: "bold",
  },
  indicator: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  status: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 15,
    alignSelf: "center",
  },

  createRace: {
    width: "100%",
    height: "100%",
    backgroundColor: "#312d2b",
    flex: 1,
  },
  fixedHeader: {
    height: 55,
    width: "100%",
    top: 0,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#252422",
  },
  backArrow: {
    tintColor: "#fff",
    height: 25,
    width: 50,
    left: 0,
  },
  footer: {
    height: 75,
    width: "100%",
    backgroundColor: "#252422",
    bottom: 0,
    padding: 10,
    position: "absolute",
    paddingHorizontal: 10,
    elevation: 10,
  },
});
