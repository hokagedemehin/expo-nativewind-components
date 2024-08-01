import { styled } from "nativewind";
import { StyledWindTextProps } from "../types";
import { Text } from "react-native";
import React from "react";

const StyledWindTextComp = styled(Text);

export const StyledWindText: React.FC<StyledWindTextProps> = ({
  children,
  className,
  style,
  ...rest
}) => {
  return (
    <StyledWindTextComp className={className} style={style} {...rest}>
      {children}
    </StyledWindTextComp>
  );
};
