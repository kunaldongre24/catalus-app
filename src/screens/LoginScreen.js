import React, { useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FilledButton from "../components/FilledButton";
import InputField from "../components/InputField";
import TextButton from "../components/TextButton";
import Error from "../components/Error";
import { AuthContext } from "../contexts/AuthContext";
import NameHeader from "../components/NameHeader";
import Heading from "../components/Heading";
import StatusBar from "../components/StatusBar";

export default function LoginScreen({ navigation }) {
  const { login } = React.useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <Heading>catalus</Heading>
      <View style={styles.header}>
        <Image
          fadeDuration={0}
          source={require("../assets/logo.png")}
          style={styles.logo}
        />
        <NameHeader />
        {error ? (
          <Error style={{ marginBottom: 10 }}>{error}</Error>
        ) : (
          <Text></Text>
        )}

        <InputField
          style={styles.input}
          placeholder={"Email"}
          keyboardType={"email-address"}
          autoComplete={"off"}
          autoCapitalize={"none"}
          onChangeText={setEmail}
        />
        <InputField
          style={styles.input}
          placeholder={"Password"}
          secureTextEntry
          autoCapitalize={"none"}
          onChangeText={setPassword}
        />
        <FilledButton
          style={styles.loginButton}
          title={"Login"}
          isLoading={loading}
          onPress={async () => {
            try {
              setLoading(true);
              setError("");
              const response = await login(email, password);
            } catch (e) {
              setError(e.message);
            }
          }}
        />
      </View>
      <TextButton
        title={`Don't have an account? Sign up`}
        style={{ padding: 15, borderColor: "#ddd", borderTopWidth: 1 }}
        onPress={() => {
          navigation.navigate("Register");
        }}
      />
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
  logo: {
    height: 100,
    width: 100,
    marginBottom: 5,
  },
  header: {
    paddingHorizontal: 25,
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
    zIndex: 999,
    minHeight: 350,
    flexWrap: "wrap",
  },

  input: {
    height: 45,
    fontSize: 14,
    marginBottom: 14,
    maxWidth: 400,
    borderColor: "#b5b5b5",
  },
  loginButton: {
    height: 45,
    fontSize: 15,
    marginBottom: 14,
    marginTop: 5,
    maxWidth: 400,
    borderColor: "#888",
  },
});
