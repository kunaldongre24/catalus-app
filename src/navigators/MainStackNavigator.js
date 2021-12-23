import React, { useState } from "react";
import HomeScreen from "../screens/HomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotificationScreen from "../screens/NotificationScreen";
import ProfileScreen from "../screens/ProfileScreen";
import StatScreen from "../screens/StatScreen";
import SearchScreen from "../screens/SearchScreen";
import { Image, View } from "react-native";

const Tab = createBottomTabNavigator();

export default function MainStackNavigator() {
  const [loading, setLoading] = useState(false);
  const headerStyle = {
    elevation: 0,
    backgroundColor: "#252422",
  };
  const titleStyle = {
    color: "rgba(255, 255, 255, 0.7)",
  };
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          elevation: 0,
          backgroundColor: "#252422",
          borderTopWidth: 0,
        },
      })}
    >
      <Tab.Screen
        name="Catalus"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                fadeDuration={0}
                source={require("../assets/baseline_home_black_48.png")}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? "#f5f5f5" : "#777",
                }}
                onLoadStart={() => setLoading(true)}
                onLoadEnd={() => {
                  setLoading(false);
                }}
              />
            </View>
          ),
          headerStyle: headerStyle,
          headerTitleStyle: titleStyle,
          headerTitleAlign: "center",
        }}
      />

      <Tab.Screen
        name="Search"
        children={() => <SearchScreen />}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                fadeDuration={0}
                source={require("../assets/baseline_search_black_48.png")}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? "#f5f5f5" : "#777",
                }}
                onLoadStart={() => setLoading(true)}
                onLoadEnd={() => {
                  setLoading(false);
                }}
              />
            </View>
          ),
          headerShown: false,
          headerStyle: headerStyle,
          headerTitleStyle: titleStyle,
          headerTitleAlign: "center",
        }}
      />

      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                fadeDuration={0}
                source={require("../assets/baseline_notifications_black_48.png")}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? "#f5f5f5" : "#777",
                }}
                onLoadStart={() => setLoading(true)}
                onLoadEnd={() => {
                  setLoading(false);
                }}
              />
            </View>
          ),

          headerStyle: headerStyle,
          headerTitleStyle: titleStyle,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <Image
                fadeDuration={0}
                source={require("../assets/baseline_person_black_48.png")}
                resizeMode="contain"
                style={{
                  height: 30,
                  width: 30,
                  tintColor: focused ? "#f5f5f5" : "#777",
                }}
                onLoadStart={() => setLoading(true)}
                onLoadEnd={() => {
                  setLoading(false);
                }}
              />
            </View>
          ),
          headerStyle: headerStyle,
          headerTitleStyle: titleStyle,
        }}
      />
    </Tab.Navigator>
  );
}
