import React from "react";
import { styled } from "nativewind";
import { StyledWindImageBackgroundProps } from "../types";
import { ImageBackground } from "react-native";

const StyledWindImageBackgroundComp = styled(ImageBackground);

export const StyledWindImageBackground: React.FC<
  StyledWindImageBackgroundProps
> = ({ className, style, children, ...rest }) => {
  return (
    <StyledWindImageBackgroundComp
      className={className}
      style={style}
      {...rest}
    >
      {children}
    </StyledWindImageBackgroundComp>
  );
};
