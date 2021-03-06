import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const Stack = createStackNavigator();

const globalScreensOptions = {
  headerStyle: {
    backgroundColor: "#2C6BED",
  },
  headerTitleStyle: {
    color: "white",
  },
  headerTintColor: "white",
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreensOptions}>
        <Stack.Screen
          name="Login"
          options={{
            headerTitle: "Login",
            headerTitleAlign: "center",
          }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="Register"
          options={{
            headerTitle: "Register",
            headerTitleAlign: "center",
          }}
          component={RegisterScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
