import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FilledButton from "../components/FilledButton";
import InputField from "../components/InputField";
import Heading from "../components/Heading";
import Error from "../components/Error";
import { AuthContext } from "../contexts/AuthContext";
import StatusBar from "../components/StatusBar";

export default function UserDetails({ next, previous, setPassword, values }) {
  const { register } = React.useContext(AuthContext);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const Continue = (e) => {
    e.preventDefault();
    next();
  };
  const Previous = (e) => {
    e.preventDefault();
    previous();
  };
  const { username, email, password } = values;
  return (
    <SafeAreaView style={{ width: "100%" }}>
      <View>
        <Heading>Create Password</Heading>

        <InputField
          style={styles.input}
          placeholder={"New password"}
          autoCapitalize={"none"}
          secureTextEntry
          onChangeText={(password) => setPassword(password)}
        />
        {error ? (
          <Error style={{ marginBottom: 10 }}>{error}</Error>
        ) : (
          <Text style={{ height: 0 }}></Text>
        )}
        <FilledButton
          style={styles.loginButton}
          title={loading ? "Creating account" : "Create account"}
          onPress={async () => {
            try {
              setLoading(true);
              const response = await register(email, username, password);
              if (response.err) {
                setError(response.err);
              }
              setLoading(false);
            } catch (e) {
              setLoading(false);
              setError(e.message);
            }
          }}
          isDisabled={values.password ? false : true}
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
