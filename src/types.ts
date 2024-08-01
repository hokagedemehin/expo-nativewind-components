import {
  type TextProps,
  type ActivityIndicatorProps,
  type ViewProps,
  type PressableProps,
} from "react-native";
import React from "react";

export type StyledWindViewProps = ViewProps & {
  children: React.ReactNode;
  className?: string;
  style?: object;
};

export type StyledWindTextProps = TextProps & {
  children: React.ReactNode;
  className?: string;
  style?: object;
};

export type StyledWindPressableProps = PressableProps & {
  children: React.ReactNode;
  className?: string;
  style?: object;
};

export type StyledWindActivityIndicatorProps = ActivityIndicatorProps & {
  className?: string;
  style?: object;
};
