import React from "react";
import { styled } from "nativewind";
import { StyledWindTouchableOpacityProps } from "../types";
import { TouchableOpacity } from "react-native";

const StyledWindTouchableOpacityComp = styled(TouchableOpacity);

export const StyledWindTouchableOpacity: React.FC<
  StyledWindTouchableOpacityProps
> = ({ children, className, style, ...rest }) => {
  return (
    <StyledWindTouchableOpacityComp
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </StyledWindTouchableOpacityComp>
  );
};
