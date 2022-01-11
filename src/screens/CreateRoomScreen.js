import React, { useEffect, useState } from "react";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import axios from "axios";
import { UserContext } from "../contexts/UserContext";

export default function CreateRoomScreen(props) {
  var user = React.useContext(UserContext);
  const config = {
    headers: { "x-access-token": user.token },
  };
  const [step, setStep] = useState(0);
  const [selectedChapter, setSelectedChapter] = useState([]);
  const [chapters, setChapters] = useState([]);
  const [isVoiceChatEnabled, toggleVoiceChat] = useState(false);
  const [roomId, setRoomId] = useState();
  useEffect(() => {
    fetchChapters();
  }, []);
  useEffect(() => {
    if (roomId) {
      setTimeout(
        () => props.navigation.navigate("Room", { roomId: roomId }),
        0
      );
    }
  }, [roomId]);
  const fetchChapters = async () => {
    const response = await axios.get(
      `http://192.168.5.62:8000/api/v1/admin/fetchData?target=chapter`
    );
    setChapters(response.data);
    return () => {
      setChapters([]);
    };
  };
  const createNewRoom = async () => {
    const bodyFormData = new FormData();
    selectedChapter.forEach((item) => {
      bodyFormData.append("chapterList[]", item.id);
    });

    const response = await axios.post(
      `http://192.168.5.62:8000/api/v1/room`,
      {
        chapterList: bodyFormData,
        hostId: user.id,
        voiceEnabled: isVoiceChatEnabled,
      },
      config
    );
    setSelectedChapter([]);
    toggleVoiceChat(false);
    setRoomId(response.data.insertId);
    setStep(0);

    return () => {
      setRoomId({});
    };
  };
  const handleBackPress = () => {
    if (step === 0) {
    } else {
      setStep(0);
    }
    true;
  };
  return (
    <View style={styles.createRace}>
      <View style={styles.fixedHeader}>
        <Pressable
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "center",
          }}
          onPress={() => props.navigation.goBack(null)}
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
            marginRight: 70,
          }}
        >
          New Race
        </Text>
      </View>

      {step === 0 ? (
        <Step1
          setSelectedChapter={setSelectedChapter}
          selectedChapter={selectedChapter}
          chapters={chapters}
        />
      ) : (
        <Step2
          selectedChapter={selectedChapter}
          toggleVoiceChat={toggleVoiceChat}
          isVoiceChatEnabled={isVoiceChatEnabled}
        />
      )}
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
          style={[styles.btn, !selectedChapter.length && { opacity: 0.5 }]}
          onPress={() =>
            step === 1
              ? createNewRoom()
              : selectedChapter.length && setStep(step + 1)
          }
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {step === 0 ? "Next" : "Create new race"}
          </Text>
        </Pressable>
      </View>
    </View>
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

  createRace: {
    width: "100%",
    height: "100%",
    backgroundColor: "#000",
    flex: 1,
  },
  fixedHeader: {
    height: 55,
    width: "100%",
    top: 0,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#000000",
  },
  backArrow: {
    tintColor: "#fff",
    height: 25,
    width: 70,
    left: 0,
  },
  footer: {
    height: 75,
    width: "100%",
    backgroundColor: "#000000",
    bottom: 0,
    padding: 10,
    position: "absolute",
    paddingHorizontal: 10,
    elevation: 10,
  },
});
