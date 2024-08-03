import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  StyledWindPressable,
  StyledWindText,
} from "expo-nativewind-components";

const PressableExample = () => {
  return (
    <StyledWindPressable
      onPress={() => {
        console.log("You pressed me");
      }}
      className="bg-blue-500 h-14 w-[80%] rounded-lg  flex flex-row justify-center items-center "
      android_ripple={{ color: "purple" }}
    >
      <StyledWindText className="text-center text-2xl font-bold ">
        Press me
      </StyledWindText>
    </StyledWindPressable>
  );
};

export default PressableExample;
