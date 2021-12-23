import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { UserContext } from "../contexts/UserContext";
import StatusBar from "../components/StatusBar";

export default function NotificationScreen() {
  const user = React.useContext(UserContext);

  return (
    <SafeAreaView style={styles.container}>
      <Text>Welcome Notification</Text>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
