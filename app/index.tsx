import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
     className="flex items-center justify-center h-[100vh] gap-3"
    >
      <Text className="text-2xl">Edit app/index.tsx to edit this screen.</Text>
      <Link href={"/details"} className="text-2xl">To Details Page</Link>
      <Link href={"/account"} className="text-2xl">To Account Page</Link>
      <Link href={"/register"} className="text-2xl">To register Page</Link>
      <Link href={"/login"} className="text-2xl">To login Page</Link>
    </View>
  );
}
