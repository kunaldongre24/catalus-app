import React, { useReducer } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStackNavigator from "./src/navigators/AuthStackNavigator";
import MainStackNavigator from "./src/navigators/MainStackNavigator";
import { AuthContext } from "./src/contexts/AuthContext";
import useAuth from "./src/hooks/useAuth";
import { UserContext } from "./src/contexts/UserContext";
import SplashScreen from "./src/screens/SplashScreen";
import { useFonts } from "@use-expo/font";

const RootStack = createNativeStackNavigator();

export default function App() {
  const { auth, state } = useAuth();
  const customFonts = {
    Poppins: require("./src/assets/fonts/Poppins-Regular.ttf"),
    PoppinsSemibold: require("./src/assets/fonts/Poppins-SemiBold.ttf"),
  };
  const [isLoaded] = useFonts(customFonts);
  function renderScreens() {
    if (state.loading || !isLoaded) {
      return <RootStack.Screen name={"Splash"} component={SplashScreen} />;
    }
    return state.user ? (
      <RootStack.Screen name={"MainStack"}>
        {() => (
          <UserContext.Provider value={state.user}>
            <MainStackNavigator />
          </UserContext.Provider>
        )}
      </RootStack.Screen>
    ) : (
      <RootStack.Screen name={"RootStack"} component={AuthStackNavigator} />
    );
  }
  return (
    <AuthContext.Provider value={auth}>
      <NavigationContainer>
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
          {renderScreens()}
        </RootStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
