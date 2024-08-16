import { setBackgroundColorAsync } from "expo-system-ui";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#bbb",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Hello World!</Text>
    </View>
  );
}
