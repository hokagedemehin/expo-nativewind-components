import React from "react";
import {
  StyledWindKeyboardAvoidingViewComp,
  StyledWindText,
} from "expo-nativewind-components";
import { Platform } from "react-native";

const KeyboardAvoidExample = () => {
  return (
    <StyledWindKeyboardAvoidingViewComp
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className=" flex-1 w-full justify-center items-center bg-fuchsia-500"
    >
      <StyledWindText className="text-2xl font-bold text-white">
        Keyboard Avoiding View 🚀
      </StyledWindText>
    </StyledWindKeyboardAvoidingViewComp>
  );
};

export default KeyboardAvoidExample;
