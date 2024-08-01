import { Text } from "react-native";
import React from "react";

const NativeTextComp = ({
  // children,
  className,
  style,
}: {
  // children: React.ReactNode;
  className?: string;
  style?: any;
}) => {
  return <Text style={style} className={className} />;
};

export default NativeTextComp;
