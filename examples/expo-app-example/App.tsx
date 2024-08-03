import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
// import { StyledWindView } from "expo-nativewind-component";
// import Example1Comp from "./src/Example1";
// import ViewExample from "./src/ViewExample";
// import TextExample from "./src/TextExample";
// import PressableExample from "./src/PressableExample";
import ImageExample from "./src/ImageExample";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>
    //     Open up App.tsx to start working on your app! will this work and wrap or
    //     not sure
    //   </Text>
    //   {/* <StyledWindView>
    //     <Text>StyledWindView</Text>
    //   </StyledWindView> */}
    //   <Example1Comp />
    //   <StatusBar style="auto" />
    // </View>
    <View style={styles.container}>
      <ImageExample />
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
