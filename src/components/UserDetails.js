import React, { useState } from "react";

import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FilledButton from "../components/FilledButton";
import InputField from "../components/InputField";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import Error from "../components/Error";
import StatusBar from "../components/StatusBar";

export default function UserDetails({ next, setUsername, values }) {
  const [error, setError] = useState("");
  const Continue = (e) => {
    e.preventDefault();
    next();
  };
  return (
    <SafeAreaView style={{ width: "100%" }}>
      <View>
        <Heading>Choose Username</Heading>
        <SubHeading style={{ marginTop: 10 }}>
          You can always change it later
        </SubHeading>

        <InputField
          style={styles.input}
          placeholder={"Username"}
          autoCapitalize={"none"}
          onChangeText={(username) => setUsername(username)}
        />
        {error ? (
          <Error style={{ marginBottom: 10 }}>{error}</Error>
        ) : (
          <Text style={{ height: 0 }}></Text>
        )}
        <FilledButton
          style={styles.loginButton}
          title={"Next"}
          onPress={Continue}
          isDisabled={values.username ? false : true}
        />
      </View>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 45,
    fontSize: 14,
    marginTop: 20,
    marginBottom: 12,
    borderColor: "#b5b5b5",
    maxWidth: 400,
  },
  loginButton: {
    height: 45,
    fontSize: 15,
    marginBottom: 14,
    marginTop: 5,
    borderColor: "#888",
    maxWidth: 400,
  },
});
