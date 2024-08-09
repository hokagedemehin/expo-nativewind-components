import React from "react";
import { styled } from "nativewind";
import { StyledWindTouchableHighlightProps } from "../types";
import { TouchableHighlight } from "react-native";

const StyledWindTouchableHighlightComp = styled(TouchableHighlight);

export const StyledWindTouchableHighlight: React.FC<
  StyledWindTouchableHighlightProps
> = ({ children, className, style, ...rest }) => {
  return (
    <StyledWindTouchableHighlightComp
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </StyledWindTouchableHighlightComp>
  );
};
