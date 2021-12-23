import React from "react";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();

export default function AuthStackNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name={"LoginStack"}>
        {() => (
          <LoginStack.Navigator screenOptions={{ headerShown: false }}>
            <LoginStack.Screen name={"Login"} component={LoginScreen} />
          </LoginStack.Navigator>
        )}
      </AuthStack.Screen>
      <AuthStack.Screen name={"Register"} component={RegisterScreen} />
    </AuthStack.Navigator>
  );
}
