import { ViewProps, TextProps } from 'react-native';
import React from 'react';

type StyledWindViewProps = ViewProps & {
    children: React.ReactNode;
    className?: string;
    style?: object;
};
type StyledWindTextProps = TextProps & {
    children: React.ReactNode;
    className?: string;
    style?: object;
};
type StyledWindPressableProps = {
    children: React.ReactNode;
    className?: string;
    style?: object;
};

declare const StyledWindView: React.FC<StyledWindViewProps>;

declare const StyledWindText: React.FC<StyledWindTextProps>;

export { type StyledWindPressableProps, StyledWindText, type StyledWindTextProps, StyledWindView, type StyledWindViewProps };
