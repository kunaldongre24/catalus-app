import React, { useState, useEffect } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import StatusBar from "../components/StatusBar";
import io from "socket.io-client";

export default function RoomScreen(props, { navigation }) {
  const ENDPOINT = `http://192.168.5.62:8000/`;

  useEffect(() => {
    const user = 10,
      room = 20;
    const socket = io(ENDPOINT);
    socket.emit("join", { user, room });
  }, [ENDPOINT, props.route.params.roomId]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <ScrollView>
        <View style={{ padding: 15 }}>
          <Text
            style={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: 20,
              fontFamily: "Poppins",
            }}
          >
            Catalus <Text style={{ fontWeight: "normal" }}>Room</Text>
          </Text>
          <Text
            style={{
              color: "#2b9ee0",
              fontFamily: "PoppinsSemibold",
              fontSize: 14,
            }}
          >
            Room Id: {props.route.params.roomId}
          </Text>
        </View>
      </ScrollView>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
