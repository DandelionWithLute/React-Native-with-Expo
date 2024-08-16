import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex items-center justify-center h-[100vh] text-3xl">
      <Text className="text-2xl">This is the detailed page.</Text>
      <Link href={"/"} className="text-2xl">Go to Main Page</Link>
    </View>
  );
}
