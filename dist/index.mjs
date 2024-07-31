// src/StyledWindView.tsx
import { styled } from "nativewind";
import { View } from "react-native";
var StyledWindViewComp = styled(View);
var StyledWindView = ({
  children,
  className,
  style,
  ...rest
}) => {
  return /* @__PURE__ */ React.createElement(StyledWindViewComp, { className, style, ...rest }, children);
};
export {
  StyledWindView
};
//# sourceMappingURL=index.mjs.map