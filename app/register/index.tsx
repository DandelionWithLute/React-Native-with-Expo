import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

type Props = {
  //   name: String;
  //   setName: String;
};

const index = (props: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitPostCallBack, setSubmitPostCallBack] = useState("");
  const handleSubmit = async () => {
    console.log("Starting to handle Submit!");
    // const res = await fetch("http://192.168.31.82:5000/api/register", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     name,
    //     email,
    //     password,
    //   }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setSubmitPostCallBack(data);
    //     // console.log(data.name, data.email);
    //     SecureStore.setItemAsync("name", data.name);
    //     SecureStore.setItemAsync("email", data.email);
    //   });
    const getReadyToPost = async () =>
      await axios
        .post("http://192.168.31.82:5000/api/register", {
          name,
          email,
          password,
        })
        .then(async (res) => {
          console.log("Then response under handle Submit!");
          console.log(await res.status);
          // console.log(response.json().data);
          // setSubmitPostCallBack(response.data);
          // SecureStore.setItemAsync("name", response.data.name);
          // SecureStore.setItemAsync("email", response.data.email);
        })
        .catch(function (error) {
          console.log(error);
        });
    console.log(getReadyToPost());

    console.log("Finished handling Submit!");
  };

  return (
    <View className="flex p-8 items-center justify-center w-full h-[100vh]">
      <Text className="text-5xl">Register</Text>
      <Text className="text-3xl">Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        className="text-2xl border-solid bg-slate-500 h-[36px] w-[80%] rounded-lg"
      />
      <Text className="text-3xl">Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        className="text-2xl border-solid bg-slate-500 h-[36px] w-[80%] rounded-lg"
      />
      <Text className="text-3xl">Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        className="text-2xl border-solid bg-slate-500 h-[36px] w-[80%] rounded-lg"
      />
      <Text className="text-2xl" onPress={handleSubmit}>
        Submit
      </Text>

      <Text className="text-2xl bg-slate-500">{submitPostCallBack.name}</Text>
      <Text className="text-2xl bg-slate-500">{submitPostCallBack.email}</Text>
    </View>
  );
};

export default index;
