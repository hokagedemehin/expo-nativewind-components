// import { StyleSheet, View } from "react-native";
import { styled } from "nativewind";
import { StyledWindViewProps } from "./types";
import { View } from "react-native";

const StyledWindViewComp = styled(View);

export const StyledWindView = ({
  children,
  className,
  style,
  ...rest
}: StyledWindViewProps) => {
  return (
    <StyledWindViewComp className={className} style={style} {...rest}>
      {children}
    </StyledWindViewComp>
  );
};
