import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Pressable,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../contexts/UserContext";
import StatusBar from "../components/StatusBar";
import OptionHeader from "../components/OptionHeader";
import OptionItem from "../components/OptionItem";
import OptionButton from "../components/OptionButton";
import { AuthContext } from "../contexts/AuthContext";
import Graph from "../components/Graph";
import axios from "axios";

export default function ProfileScreen(props) {
  const { setUserSelected } = props;
  var user = React.useContext(UserContext);

  const loggedUser = React.useContext(UserContext);
  const [userData, setUserData] = useState({});
  const [loading, setLoading] = useState(false);
  const [addFriend, setAddFriend] = useState(false);
  const isLoggedUser = !(
    (props.route &&
      props.route.params &&
      props.route.params.info.id != loggedUser.id) ||
    (props.info && props.info.id != loggedUser.id)
  );
  if (props.route) {
    if (props.route.params) user = props.route.params.info;
  } else if (props.info) {
    user = props.info;
  }
  useEffect(() => {
    setLoading(true);
    const fetchApi = async () => {
      setLoading(true);

      const response = await axios.get(
        `http://192.168.40.141:8000/api/v1/user/id/${user.id}`
      );
      setUserData(response.data[0]);
      setLoading(false);
    };
    fetchApi();
  }, [user]);
  const { logout } = React.useContext(AuthContext);
  if (loading) {
    return (
      <View
        style={[
          styles.container,
          {
            justifyContent: "center",
            alignItems: "center",
          },
        ]}
      >
        <ActivityIndicator size={"large"} color={"#fff"} />
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={[!props.info && { display: "none" }, styles.fixedHeader]}>
        <Pressable
          onPress={() => {
            setUserSelected(false);
          }}
        >
          <Image
            fadeDuration={0}
            source={require("../assets/back.png")}
            resizeMode={"contain"}
            style={styles.backArrow}
          />
        </Pressable>
      </View>
      <ScrollView>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            paddingHorizontal: 15,
            marginTop: 5,
          }}
        >
          <Text style={styles.circle}>
            {userData.username && userData.username.charAt(0)}
          </Text>
          <View style={[styles.view, { flex: 1 }]}>
            <Text style={styles.bold} numberOfLines={1}>
              {userData.username && userData.username}
            </Text>
            {userData.name && (
              <Text style={styles.text} numberOfLines={1}>
                {userData.name}
              </Text>
            )}
            <Text style={[styles.text, { fontSize: 12 }]} numberOfLines={1}>
              800
            </Text>
          </View>
        </View>
        <Text
          style={{
            paddingHorizontal: 15,
            marginTop: 10,
            color: "rgba(255,255,255,0.5)",
            fontSize: 13,
          }}
        >
          Joined Nov 2 2021
        </Text>

        <View style={styles.info}>
          <View style={styles.footer}>
            <Pressable
              android_ripple={{ color: "rgba(255,255,255,0.1)" }}
              style={[
                isLoggedUser ? { width: "100%" } : { width: "49%" },
                styles.button,
              ]}
              onPress={() => setAddFriend(!addFriend)}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 15,
                }}
              >
                {!isLoggedUser
                  ? addFriend
                    ? "Request Sent"
                    : "Add Friend"
                  : "Edit Profile"}
              </Text>
            </Pressable>
            {!isLoggedUser && (
              <Pressable
                android_ripple={{ color: "rgba(255,255,255,0.1)" }}
                style={[{ width: "49%" }, styles.button]}
              >
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 15,
                  }}
                >
                  Race
                </Text>
              </Pressable>
            )}
          </View>
          <View style={{ width: "100%", backgroundColor: "#312d2b" }}>
            <View style={styles.chartContainer}>
              <Graph />
            </View>
          </View>
          <OptionHeader title={"STATS"} />
          <OptionItem title={"Last Test Rank"} info={"#2"} />
          <OptionItem title={"Overall Rank"} info={"#1"} />
          <OptionItem title={"Rating"} info={"1202"} />
          <OptionHeader title={"ACCOUNT ACTIONS"} />
          <OptionItem title={"Change Password"} />
          <OptionButton
            title={"Logout"}
            onPress={logout}
            style={{ color: "#ffa4a1" }}
          />
        </View>
        <StatusBar />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#252422",
  },

  backArrow: {
    tintColor: "#fff",
    height: 25,
  },
  view: {
    height: 78,
    justifyContent: "space-between",
  },
  bold: {
    fontSize: 22,
    fontFamily: "PoppinsSemibold",
    color: "rgba(255,255,255,1)",
    textTransform: "lowercase",
    marginBottom: -10,
  },
  fixedHeader: {
    height: 55,
    width: "100%",
    top: 0,
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    color: "rgba(255,255,255,0.7)",
    paddingRight: 10,
    textTransform: "lowercase",
  },
  footer: {
    height: 60,
    width: "100%",
    backgroundColor: "#252422",
    padding: 10,
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
  },
  info: {
    width: "100%",
    paddingBottom: 100,
  },
  circle: {
    height: 80,
    width: 80,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 40,
    marginRight: 12,
    color: "#aaa",
    fontSize: 50,
    fontFamily: "PoppinsSemibold",
    textAlign: "center",
    lineHeight: 80,
  },
  menuItem: {
    width: 80,
    height: 100,
    margin: "1%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    backgroundColor: "#252422",
  },
  menu: {
    width: "100%",
    flexWrap: "nowrap",
    flexDirection: "row",
    padding: 10,
  },
  textStyle: {
    color: "rgba(255,255,255,0.7)",
  },
  gheading: {
    paddingHorizontal: 10,
    marginTop: 10,
    color: "#555",
    fontFamily: "PoppinsSemibold",
  },
  chartContainer: {
    paddingTop: 10,
    backgroundColor: "#252422",
    margin: 10,
    marginHorizontal: 14,
    borderRadius: 4,
    elevation: 2,
  },
});
