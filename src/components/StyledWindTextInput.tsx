import React from "react";
import { styled } from "nativewind";
import { StyledWindTextInputProps } from "../types";
import { TextInput } from "react-native";

const StyledWindTextInputComp = styled(TextInput);

export const StyledWindTextInput: React.FC<StyledWindTextInputProps> = ({
  className,
  ...rest
}) => {
  return <StyledWindTextInputComp className={className} {...rest} />;
};
