import React, { useState, useEffect } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Modal,
  BackHandler,
  Image,
} from "react-native";
import InputField from "../components/InputField";
import FilledButton from "../components/FilledButton";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../contexts/UserContext";
import StatusBar from "../components/StatusBar";
import HomeMenuItem from "../components/HomeMenuItem";
import Heading from "../components/Heading";
import axios from "axios";
import CreateNewRace from "../components/CreateNewRace";

export default function HomeScreen() {
  const user = React.useContext(UserContext);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [newRace, setNewRace] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchApi = async () => {
      setLoading(true);
      const response = await axios.get(
        `http://192.168.43.20:8000/api/v1/user/id/${user.id}`
      );
      if (!response.data[0].name) {
        setModalVisible(true);
      }
      setLoading(false);
    };
    fetchApi();
  }, [user]);

  const setName = async (lname, fname) => {
    const name = lname + " " + fname;
    const response = await axios.get(
      `http://192.168.43.20:8000/api/v1/user/u/${q}`,

      config
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#312d2b" }}>
      <CreateNewRace newRace={newRace} setNewRace={setNewRace} />
      <ScrollView>
        <Modal animationType="slide" transparent={true} visible={false}>
          <View style={styles.modalView}>
            <View
              style={{
                width: "100%",
                backgroundColor: "#fff",
                borderRadius: 12,
                elevation: 10,
                paddingHorizontal: 20,
                paddingVertical: 15,
                display: "flex",
                justifyContent: "space-between",
                minHeight: 500,
                height: "100%",
              }}
            >
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Heading style={{ fontWeight: "bold" }}>
                  Welcome {user.username}!
                </Heading>
                <Text
                  style={{
                    fontSize: 20,
                    marginTop: 10,
                    color: "#888",
                    textAlign: "center",
                  }}
                >
                  Enter your name
                </Text>
                <Text style={styles.circle}>{user.username.charAt(0)}</Text>

                <View style={{ width: "100%", marginTop: 20 }}>
                  <InputField
                    style={styles.input}
                    placeholder={"First name"}
                    autoComplete={"off"}
                    onChangeText={setFname}
                  />
                  <InputField
                    style={styles.input}
                    placeholder={"Last name"}
                    autoComplete={"off"}
                    onChangeText={setLname}
                  />
                </View>
              </View>
              <FilledButton
                style={styles.loginButton}
                title={"Continue"}
                onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </Modal>
        <View style={styles.menu}>
          <HomeMenuItem
            title={"Race your friends"}
            source={require("../assets/flag2.png")}
            style={styles.menuItem}
            subHeading={"10 min vs Friends"}
          />
          <HomeMenuItem
            title={"Practice"}
            source={require("../assets/flag.png")}
            style={styles.menuItem}
            subHeading={"Self compete"}
          />
          <HomeMenuItem
            title={"Statistics"}
            source={require("../assets/graph.png")}
            style={styles.menuItem}
            subHeading={"Your stats"}
          />
          <HomeMenuItem
            title={"Friends"}
            source={require("../assets/friends.png")}
            style={styles.menuItem}
            subHeading={13}
          />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable
          android_ripple={{ color: "rgba(0,0,0,0.1)" }}
          style={styles.button}
          onPress={() => {
            setNewRace(true);
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            New Race
          </Text>
        </Pressable>
      </View>

      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  footer: {
    height: 75,
    width: "100%",
    backgroundColor: "#252422",
    bottom: 0,
    padding: 10,
    paddingHorizontal: 15,
    elevation: 8,
  },

  button: {
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    borderRadius: 5,
    alignItems: "center",
    backgroundColor: "#1174ad",
  },
  menuItem: {
    width: "100%",
    height: 105,
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 6,
    backgroundColor: "#252422",
    padding: 15,
    overflow: "hidden",
  },
  menu: {
    width: "100%",
    padding: 15,
    backgroundColor: "#312d2b",
    paddingBottom: 100,
  },

  image: {
    width: "30%",
    tintColor: "#fff",
    height: "50%",
  },
  modalView: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 15,
    paddingVertical: 40,
    width: "100%",
    marginTop: -22,
    flex: 1,
    alignItems: "center",
  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    height: 50,
    fontSize: 16,
    marginBottom: 14,
    maxWidth: 400,
    borderColor: "#b5b5b5",
  },
  loginButton: {
    height: 50,
    fontSize: 15,
    marginBottom: 14,
    marginTop: 5,
    maxWidth: 400,
    borderColor: "#888",
  },
  circle: {
    height: 80,
    width: 80,
    backgroundColor: "rgba(0,0,0,0.1)",
    borderRadius: 4,
    color: "#aaa",
    fontSize: 50,
    fontFamily: "PoppinsSemibold",
    textAlign: "center",
    lineHeight: 90,
    textAlign: "center",
    marginTop: 20,
    marginBottom: 20,
  },
});
