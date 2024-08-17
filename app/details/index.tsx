import { Link } from "expo-router";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import React from "react";

export default function Index() {
  const [data, setData] = useState("");
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/todos/1")
    fetch(`http://192.168.31.82:5000`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <View className="flex items-center justify-center h-[100vh] text-3xl">
      <Text className="text-2xl">This is the detailed page.</Text>
      <Link href={"/"} className="text-2xl">
        Go to Main Page
      </Link>
      <Link href={"/account"} className="text-2xl">
        Go to Main Page
      </Link>
      <Text>{data.message}</Text>
      <Text>{data.message}</Text>
      <Text>{data.message}</Text>
    </View>
  );
}
