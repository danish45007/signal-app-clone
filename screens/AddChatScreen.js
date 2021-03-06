import React, { useLayoutEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "react-native";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from "../firebase";
function AddChatScreen({ navigation }) {
  const [input, setInput] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new chat",
      headerTitleAlign: "center",
      headerBackTitle: "Chats",
    });
  }, [navigation]);
  const createChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: input,
      })
      .then(() => {
        navigation.goBack();
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setInput(text)}
        leftIcon={
          <Icon
            style={{ paddingRight: 10 }}
            name="wechat"
            type="antdesign"
            size={24}
            color="black"
          />
        }
        onSubmitEditing={createChat}
      />
      <Button
        disabled={!input}
        onPress={createChat}
        title="Create a new chat"
      />
    </View>
  );
}

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    height: "100%",
  },
});
