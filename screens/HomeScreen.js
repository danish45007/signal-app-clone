import React, { useLayoutEffect } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native";
import { SafeAreaView, ScrollView } from "react-native";
import { Avatar } from "react-native-elements";
import CustomListItem from "../components/CustomListItem";
import { auth } from "../firebase";
const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Signal",
      headerTitleAlign: "center",
      headerStyle: { backgroundColor: "#fff" },
      headerTitleStyle: { color: "black" },
      headerTintColor: "black",
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity>
            <Avatar
              rounded
              source={{
                uri: auth?.currentUser?.photoURL,
              }}
            />
          </TouchableOpacity>
        </View>
      ),
    });
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
