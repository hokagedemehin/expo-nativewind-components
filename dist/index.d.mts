import { ViewProps, TextProps, PressableProps, ActivityIndicatorProps, ImageProps, ImageBackgroundProps, ScrollViewProps } from 'react-native';
import { ImageProps as ImageProps$1 } from 'expo-image';
import React from 'react';

type StyledWindViewProps = ViewProps & {
    className?: string;
    style?: object;
};
type StyledWindTextProps = TextProps & {
    className?: string;
    style?: object;
};
type StyledWindPressableProps = PressableProps & {
    children?: React.ReactNode;
    className?: string;
    style?: object;
};
type StyledWindActivityIndicatorProps = ActivityIndicatorProps & {
    className?: string;
    style?: object;
};
type StyledWindImageProps = ImageProps & {
    className?: string;
    style?: object;
};
type StyledWindImageBackgroundProps = ImageBackgroundProps & {
    children?: React.ReactNode;
    className?: string;
    style?: object;
};
type StyledWindExpoImageProps = ImageProps$1 & {
    className?: string;
    style?: object;
};
type StyledWindScrollViewProps = ScrollViewProps & {
    children?: React.ReactNode;
    className?: string;
    style?: object;
};

declare const StyledWindView: React.FC<StyledWindViewProps>;

declare const StyledWindText: React.FC<StyledWindTextProps>;

declare const StyledWindPressable: React.FC<StyledWindPressableProps>;

declare const StyleWindImage: React.FC<StyledWindImageProps>;

declare const StyledWindActivity: React.FC<StyledWindActivityIndicatorProps>;

declare const StyledWindImageBackground: React.FC<StyledWindImageBackgroundProps>;

declare const StyledWindExpoImage: React.FC<StyledWindExpoImageProps>;

declare const StyleWindScrollView: React.FC<StyledWindScrollViewProps>;

export { StyleWindImage, StyleWindScrollView, StyledWindActivity, type StyledWindActivityIndicatorProps, StyledWindExpoImage, type StyledWindExpoImageProps, StyledWindImageBackground, type StyledWindImageBackgroundProps, type StyledWindImageProps, StyledWindPressable, type StyledWindPressableProps, type StyledWindScrollViewProps, StyledWindText, type StyledWindTextProps, StyledWindView, type StyledWindViewProps };
