import React from "react";
import { styled } from "nativewind";
import { StyledWindScrollViewProps } from "../types";
import { ScrollView } from "react-native";

const StyledWindScrollViewComp = styled(ScrollView);

export const StyledWindScrollView: React.FC<StyledWindScrollViewProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <StyledWindScrollViewComp className={className} {...rest}>
      {children}
    </StyledWindScrollViewComp>
  );
};
