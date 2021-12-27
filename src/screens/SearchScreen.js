import React, { useState, useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  RefreshControl,
  BackHandler,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../contexts/UserContext";
import axios from "axios";
import StatusBar from "../components/StatusBar";
import { NavigationContainer } from "@react-navigation/native";
import ProfileScreen from "./ProfileScreen";

export default function SearchScreen({ navigation }) {
  const [searchResult, setSearchResult] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [borderColor, setBorderColor] = useState("transparent");
  const [userSelected, setUserSelected] = useState({});
  const user = React.useContext(UserContext);

  const config = {
    headers: { "x-access-token": user.token },
  };
  useEffect(() => {
    setLoading(true);
    setUserSelected({});
    //do something on page load
    setLoading(false);
  }, []);
  useEffect(() => {
    if (userSelected.id) {
      BackHandler.addEventListener("hardwareBackPress", handleBackButtonClick);
    }
    return () => {
      BackHandler.removeEventListener(
        "hardwareBackPress",
        handleBackButtonClick
      );
    };
  }, [userSelected]);
  function handleBackButtonClick() {
    setUserSelected({});

    return true;
  }
  const searchUser = async (e) => {
    setLoading(true);
    const q = e.nativeEvent.text;
    setSearchData(q);
    if (q) {
      const response = await axios.get(
        `http://192.168.43.20:8000/api/v1/user/search?s=${q}`,
        config
      );
      setSearchResult(response.data);
    } else {
      setSearchResult([]);
    }
    setLoading(false);
  };
  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    //do something on refresh
    setRefreshing(false);
  }, [refreshing]);
  if (userSelected.id) {
    return (
      <ProfileScreen info={userSelected} setUserSelected={setUserSelected} />
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={[styles.searchBar, { borderColor: borderColor }]}>
          <Image
            fadeDuration={0}
            resizeMode={"contain"}
            source={require("../assets/baseline_search_black_48.png")}
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.inputSearch}
            placeholder={"Search..."}
            placeholderTextColor="rgba(255,255,255,0.5)"
            onChange={searchUser}
            onFocus={() => setBorderColor("#fff")}
            onBlur={() => setBorderColor("transparent")}
          />
        </View>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.result}>
          {loading ? (
            <View style={styles.loader}>
              <Text style={{ color: "rgba(255,255,255,0.7)" }}>
                Searching...
              </Text>
            </View>
          ) : (
            <View>
              {searchResult.length ? (
                <View>
                  <View style={styles.list}>
                    {searchResult.map((result) => {
                      return (
                        <Pressable
                          style={styles.listItem}
                          key={result.id}
                          onPress={() => {
                            setUserSelected(result);
                          }}
                        >
                          <Text style={styles.circle}>
                            {result.username.charAt(0)}
                          </Text>
                          <View style={styles.flexColumn}>
                            <Text style={styles.name}>
                              {result.name ? result.name : result.username}
                            </Text>
                            <Text style={styles.batch}>
                              {result.name && result.username + " • "}800
                            </Text>
                          </View>
                        </Pressable>
                      );
                    })}
                  </View>
                </View>
              ) : (
                <View>
                  {searchData ? (
                    <Text
                      style={{
                        paddingHorizontal: 12,
                        paddingVertical: 20,
                        textAlign: "center",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      No results
                    </Text>
                  ) : (
                    <View></View>
                  )}
                </View>
              )}
            </View>
          )}
        </View>
      </ScrollView>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#312d2b",
  },
  header: {
    width: "100%",
    backgroundColor: "#312d2b",
    padding: 10,
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchBar: {
    flex: 1,
    width: "100%",
    backgroundColor: "#252422",
    borderRadius: 4,
    paddingLeft: 0,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderWidth: 1,
  },
  searchIcon: {
    height: 25,
    width: 25,
    marginLeft: 8,
    marginRight: 5,
    tintColor: "rgba(255,255,255,0.5)",
  },
  inputSearch: {
    fontSize: 16,
    fontFamily: "Poppins",
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    color: "#fff",
  },
  result: {
    paddingBottom: 100,
  },
  bold: {
    fontSize: 16,
    fontFamily: "PoppinsSemibold",
    color: "#222",
  },
  list: {
    width: "100%",
    borderRadius: 6,
    paddingTop: 6,
    overflow: "hidden",
    paddingHorizontal: 10,
  },
  listItem: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    marginTop: 5,
  },
  name: {
    fontFamily: "Poppins",
    fontSize: 15,
    color: "#f4f4f4",
    textTransform: "capitalize",
  },
  batch: {
    fontSize: 12,
    marginTop: -4,
    fontFamily: "Poppins",
    color: "#999",
  },
  circle: {
    height: 70,
    width: 70,
    backgroundColor: "rgba(255,255,255,0.1)",
    borderRadius: 35,
    marginRight: 16,
    marginLeft: 5,
    color: "#aaa",
    fontSize: 40,
    fontFamily: "PoppinsSemibold",
    textAlign: "center",
    lineHeight: 75,
  },
  flexColumn: {
    display: "flex",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#222",
    width: "100%",
    height: 80,
  },
  loader: {
    backgroundColor: "transparent",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
  noResult: {
    flex: 1,
    alignItems: "center",
    paddingTop: 100,
  },

  motive: {
    fontSize: 13,
    color: "#777",
    textAlign: "center",
  },
});
