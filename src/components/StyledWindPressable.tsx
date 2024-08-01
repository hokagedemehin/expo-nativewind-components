import React from "react";
import { Pressable } from "react-native";
import { StyledWindPressableProps } from "../types";
import { styled } from "nativewind";

const StyledWindPressableComp = styled(Pressable);

export const StyledWindPressable: React.FC<StyledWindPressableProps> = ({
  children,
  className,
  style,
  ...rest
}) => {
  return (
    <StyledWindPressableComp className={className} style={style} {...rest}>
      {children}
    </StyledWindPressableComp>
  );
};
