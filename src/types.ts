import { type ViewProps } from "react-native";
import React from "react";

export type StyledWindViewProps = ViewProps & {
  children: React.ReactNode;
  className?: string;
};
