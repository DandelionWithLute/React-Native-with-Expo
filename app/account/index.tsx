import React from "react";
import { Text, View } from "react-native";
import * as SecureStore from "expo-secure-store";

type Props = {};

const getValue = async () => {
  const name = await SecureStore.getItemAsync("name");
  const email = await SecureStore.getItemAsync("email");
  console.log(name, email);
  return { name, email };
};

const index = (props: Props) => {
  return (
    <View className="flex justify-center items-center w-full h-[100vh]">
      <Text>{getValue().name ? getValue().name : "Your name"}</Text>
      <Text>{getValue().email ? getValue().email : "Your email"}</Text>
    </View>
  );
};

export default index;
