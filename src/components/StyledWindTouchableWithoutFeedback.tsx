import React from "react";
import { styled } from "nativewind";
import { StyledWindTouchableWithoutFeedbackProps } from "../types";
import { TouchableWithoutFeedback } from "react-native";

const StyledWindTouchableWithoutFeedbackComp = styled(TouchableWithoutFeedback);

export const StyledWindTouchableWithoutFeedback: React.FC<
  StyledWindTouchableWithoutFeedbackProps
> = ({ children, className, style, ...rest }) => {
  return (
    <StyledWindTouchableWithoutFeedbackComp
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </StyledWindTouchableWithoutFeedbackComp>
  );
};
