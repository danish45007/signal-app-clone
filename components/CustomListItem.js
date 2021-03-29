import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri:
            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
        }}
      />
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: "800" }}>Test</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          Danish sharma
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};

export default CustomListItem;

const styles = StyleSheet.create({});
