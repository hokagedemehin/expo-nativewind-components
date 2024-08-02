import {
  type TextProps,
  type ActivityIndicatorProps,
  type ViewProps,
  type PressableProps,
  type ImageProps,
  type ImageBackgroundProps,
} from "react-native";
import { type ImageProps as ExpoImageProps } from "expo-image";
import React from "react";

export type StyledWindViewProps = ViewProps & {
  children?: React.ReactNode;
  className?: string;
  style?: object;
};

export type StyledWindTextProps = TextProps & {
  children?: React.ReactNode;
  className?: string;
  style?: object;
};

export type StyledWindPressableProps = PressableProps & {
  children?: React.ReactNode;
  className?: string;
  style?: object;
};

export type StyledWindActivityIndicatorProps = ActivityIndicatorProps & {
  className?: string;
  style?: object;
};

export type StyledWindImageProps = ImageProps & {
  className?: string;
  style?: object;
};

export type StyledWindImageBackgroundProps = ImageBackgroundProps & {
  children?: React.ReactNode;
  className?: string;
  style?: object;
};

export type StyledWindExpoImageProps = ExpoImageProps & {
  className?: string;
  style?: object;
};
