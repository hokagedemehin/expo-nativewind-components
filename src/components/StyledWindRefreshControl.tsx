import React from "react";
import { styled } from "nativewind";
import { StyledWindRefreshControlProps } from "../types";
import { RefreshControl } from "react-native";

const StyledWindRefreshControlComp = styled(RefreshControl);

export const StyledWindRefreshControl: React.FC<
  StyledWindRefreshControlProps
> = ({ className, ...rest }) => {
  return <StyledWindRefreshControlComp className={className} {...rest} />;
};
