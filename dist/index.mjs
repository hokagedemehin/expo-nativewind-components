// src/components/StyledWindView.tsx
import { styled } from "nativewind";
import { View } from "react-native";
import React from "react";
var StyledWindViewComp = styled(View);
var StyledWindView = ({
  children,
  className,
  style,
  ...rest
}) => {
  return /* @__PURE__ */ React.createElement(StyledWindViewComp, { className, style, ...rest }, children);
};

// src/components/StyledWindText.tsx
import { styled as styled2 } from "nativewind";
import { Text } from "react-native";
import React2 from "react";
var StyledWindTextComp = styled2(Text);
var StyledWindText = ({
  children,
  className,
  style,
  ...rest
}) => {
  return /* @__PURE__ */ React2.createElement(StyledWindTextComp, { className, style, ...rest }, children);
};

// src/StyledWindPressable.tsx
import React3 from "react";
import { Pressable } from "react-native";
import { styled as styled3 } from "nativewind";
var StyledWindPressableComp = styled3(Pressable);
export {
  StyledWindText,
  StyledWindView
};
//# sourceMappingURL=index.mjs.map