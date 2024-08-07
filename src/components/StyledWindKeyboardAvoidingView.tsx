import React from "react";
import { styled } from "nativewind";
import { StyledWindKeyboardAvoidingViewProps } from "../types";
import { KeyboardAvoidingView } from "react-native";

export const StyledWindKeyboardAvoidingViewComp = styled(KeyboardAvoidingView);

const StyledWindKeyboardAvoidingView: React.FC<
  StyledWindKeyboardAvoidingViewProps
> = ({ children, className, ...rest }) => {
  return (
    <StyledWindKeyboardAvoidingViewComp className={className} {...rest}>
      {children}
    </StyledWindKeyboardAvoidingViewComp>
  );
};
