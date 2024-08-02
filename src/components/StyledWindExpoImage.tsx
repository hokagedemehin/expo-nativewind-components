import React from "react";
import { Image } from "expo-image";
import { styled } from "nativewind";
import { StyledWindExpoImageProps } from "../types";

const StyledWindExpoImageComp = styled(Image);

export const StyledWindExpoImage: React.FC<StyledWindExpoImageProps> = ({
  className,
  style,
  ...rest
}) => {
  return (
    <StyledWindExpoImageComp className={className} style={style} {...rest} />
  );
};
