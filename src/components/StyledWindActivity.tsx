import React from "react";
import { styled } from "nativewind";
import { StyledWindActivityIndicatorProps } from "../types";
import { ActivityIndicator } from "react-native";

const StyledWindActivityIndicatorComp = styled(ActivityIndicator);

export const StyledWindActivity: React.FC<StyledWindActivityIndicatorProps> = ({
  className,
  style,
  ...rest
}) => {
  return (
    <StyledWindActivityIndicatorComp
      className={className}
      style={style}
      {...rest}
    />
  );
};
