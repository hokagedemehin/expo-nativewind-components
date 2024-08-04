import React from "react";
import { styled } from "nativewind";
import { StyledWindScrollViewProps } from "../types";
import { ScrollView } from "react-native";

const StyledWindScrollViewComp = styled(ScrollView);

export const StyleWindScrollView: React.FC<StyledWindScrollViewProps> = ({
  children,
  className,
  style,
  ...rest
}) => {
  return (
    <StyledWindScrollViewComp className={className} style={style} {...rest}>
      {children}
    </StyledWindScrollViewComp>
  );
};
