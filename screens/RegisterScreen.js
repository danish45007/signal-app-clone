import React, { useLayoutEffect, useState } from "react";
import { Button, Input, Image } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { KeyboardAvoidingView } from "react-native";
import { Platform } from "react-native";
import { auth } from "../firebase";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  // useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerBackTitle: "Back to Login",
  //   });
  // }, [navigation]);
  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL:
            imageUrl ||
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        });
      })
      .catch((error) => alert(error.message));
  };
  const keyboardVerticalOffset = Platform.OS === "ios" ? 40 : 10;
  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={keyboardVerticalOffset}
      style={styles.container}
    >
      <StatusBar style="light" />
      <Image
        source={{
          uri:
            "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          autoFocus
          type="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile Picture Url (optional)"
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>
      <Button
        containerStyle={styles.button}
        onPress={register}
        title="Register"
        raised
      />
      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});
