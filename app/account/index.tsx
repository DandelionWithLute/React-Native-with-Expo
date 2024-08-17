import React from "react";
import { Text, View } from "react-native";
import * as SecureStore from "expo-secure-store";

type Props = {};



const index = (props: Props) => {
  // const getValue = async () => {
  //   const name = await SecureStore.getItemAsync("name");
  //   const email = await SecureStore.getItemAsync("email");
  //   console.log(name, email);
  //   return { name, email };
  // };

  return (
    <View className="flex justify-center items-center w-full h-[100vh]">
      <Text>123</Text>
      <Text>456</Text>
    </View>
  );
};

export default index;
