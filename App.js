import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import AddChatScreen from "./screens/AddChatScreen";
import ChatScreen from "./screens/ChatScreen";

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
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={globalScreensOptions}
      >
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
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddChat" component={AddChatScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
