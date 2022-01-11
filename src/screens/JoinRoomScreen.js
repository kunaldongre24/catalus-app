import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  TextInput,
  ScrollView,
} from "react-native";

export default function JoinRoomScreen(props) {
  const [borderColor, setBorderColor] = useState("transparent");
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [searchResult, setSearchResult] = useState([]);

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
          Join Room
        </Text>
      </View>
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
            placeholder={"Search room, user..."}
            placeholderTextColor="rgba(255,255,255,0.5)"
            onFocus={() => setBorderColor("#555")}
            onBlur={() => setBorderColor("transparent")}
          />
        </View>
      </View>
      <ScrollView>
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
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  header: {
    width: "100%",
    backgroundColor: "#000",
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
    backgroundColor: "rgba(255,255,255,0.1)",
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
