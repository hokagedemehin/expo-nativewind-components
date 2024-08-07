import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import { StyledWindView } from "expo-nativewind-component";
// import Example1Comp from "./src/Example1";
// import ViewExample from "./src/ViewExample";
// import TextExample from "./src/TextExample";
// import PressableExample from "./src/PressableExample";
// import ImageExample from "./src/ImageExample";
import KeyboardAvoidExample from "./src/KeyboardAvoidExample";

export default function App() {
  return (
    <View style={styles.container}>
      <KeyboardAvoidExample />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
