import React from "react";
import { styled } from "nativewind";
import { StyledWindModalProps } from "../types";
import { Modal } from "react-native";

const StyledWindModalComp = styled(Modal);

export const StyledWindModal: React.FC<StyledWindModalProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <StyledWindModalComp className={className} {...rest}>
      {children}
    </StyledWindModalComp>
  );
};
