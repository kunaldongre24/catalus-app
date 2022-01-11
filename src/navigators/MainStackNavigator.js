import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RoomScreen from "../screens/RoomScreen";
import CreateRoomScreen from "../screens/CreateRoomScreen";
import TabStackNavigator from "./TabStackNavigator";
import JoinRoomScreen from "../screens/JoinRoomScreen";
import { View } from "react-native";

const MainStack = createNativeStackNavigator();

export default function AuthStackNavigator() {
  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <MainStack.Navigator
        screenOptions={{ headerShown: false }}
        headerMode={"none"}
        mode="modal"
      >
        <MainStack.Screen name={"BottomTab"} component={TabStackNavigator} />
        <MainStack.Screen name={"Room"} component={RoomScreen} />
        <MainStack.Screen name={"CreateRace"} component={CreateRoomScreen} />
        <MainStack.Screen name={"JoinRoom"} component={JoinRoomScreen} />
      </MainStack.Navigator>
    </View>
  );
}
