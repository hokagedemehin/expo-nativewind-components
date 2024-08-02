import React from "react";
import { styled } from "nativewind";
import { StyledWindImageProps } from "../types";
import { Image } from "react-native";
// import { Image } from "expo-image";

const StyledWindImageComp = styled(Image);

export const StyleWindImage: React.FC<StyledWindImageProps> = ({
  className,
  style,
  ...rest
}) => {
  return <StyledWindImageComp className={className} style={style} {...rest} />;
};
