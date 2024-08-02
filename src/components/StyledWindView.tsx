import { styled } from "nativewind";
import { StyledWindViewProps } from "../types";
import { View } from "react-native";
import React from "react";

const StyledWindViewComp = styled(View);

export const StyledWindView: React.FC<StyledWindViewProps> = ({
  children,
  className,
  style,
  ...rest
}) => {
  return (
    <StyledWindViewComp className={className} style={style} {...rest}>
      {children}
    </StyledWindViewComp>
  );
};
