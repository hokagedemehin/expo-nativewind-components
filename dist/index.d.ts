import * as React from 'react';
import React__default from 'react';
import { ViewProps } from 'react-native';

type StyledWindViewProps = ViewProps & {
    children: React__default.ReactNode;
    className?: string;
};

declare const StyledWindView: ({ children, className, style, ...rest }: StyledWindViewProps) => React.JSX.Element;

export { StyledWindView, type StyledWindViewProps };
