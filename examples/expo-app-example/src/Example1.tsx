import { StyleSheet } from "react-native";
import React from "react";
import {
  StyledWindPressable,
  StyledWindText,
  StyledWindView,
} from "expo-nativewind-components";

const Example1Comp = () => {
  return (
    <StyledWindView className="border-2 p-3 my-3 rounded-lg shadow-lg bg-green-600 shadow-emerald-500">
      <StyledWindText
        numberOfLines={1}
        className="text-white text-3xl font-bold"
      >
        StyledWindText
      </StyledWindText>
      <StyledWindPressable
        onPress={() => {
          console.log("Pressed");
        }}
        onLongPress={() => {
          console.log("Long Pressed");
        }}
        className="bg-blue-500 p-3 rounded-lg mt-3"
      >
        <StyledWindText
          numberOfLines={1}
          className="text-white text-lg font-bold"
        >
          StyledWindPressable a update oustide of the component
        </StyledWindText>
      </StyledWindPressable>
      {/* <StyledWindActivity /> */}
    </StyledWindView>
  );
};

export default Example1Comp;

const styles = StyleSheet.create({});
