import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { styled } from "nativewind";
import { StyledWindView } from "expo-nativewind-component";

const StyledText = styled(Text);

const Example1Comp = () => {
  return (
    <View>
      <Text
        style={{
          color: "red",
          fontSize: 20,
          fontWeight: "bold",
          // borderWidth: 1,
        }}
      >
        Example1Comp
      </Text>
      <StyledText
        className="text-red-400 text-4xl font-bold border p-4 rounded-md border-blue-600"
        // style={{
        //   color: "blue",
        //   fontSize: 20,
        //   fontWeight: "bold",
        // }}
      >
        Styled Text
      </StyledText>
      <StyledWindView className="border-2 p-3 my-3 rounded-lg shadow-lg shadow-emerald-500">
        <Text>StyledWindView</Text>
      </StyledWindView>
    </View>
  );
};

export default Example1Comp;

const styles = StyleSheet.create({});
