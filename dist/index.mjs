// src/components/StyledWindView.tsx
import { styled } from "nativewind";
import { View } from "react-native";
import React from "react";
var StyledWindViewComp = styled(View);
var StyledWindView = ({
  // children,
  className,
  style,
  ...rest
}) => {
  return /* @__PURE__ */ React.createElement(StyledWindViewComp, { className, style, ...rest });
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

// src/components/StyledWindPressable.tsx
import React3 from "react";
import { Pressable } from "react-native";
import { styled as styled3 } from "nativewind";
var StyledWindPressableComp = styled3(Pressable);
var StyledWindPressable = ({
  children,
  className,
  style,
  ...rest
}) => {
  return /* @__PURE__ */ React3.createElement(StyledWindPressableComp, { className, style, ...rest }, children);
};

// src/components/StyledWindImage.tsx
import React4 from "react";
import { styled as styled4 } from "nativewind";
import { Image } from "react-native";
var StyledWindImageComp = styled4(Image);
var StyleWindImage = ({
  className,
  style,
  ...rest
}) => {
  return /* @__PURE__ */ React4.createElement(StyledWindImageComp, { className, style, ...rest });
};

// src/components/StyledWindActivity.tsx
import React5 from "react";
import { styled as styled5 } from "nativewind";
import { ActivityIndicator } from "react-native";
var StyledWindActivityIndicatorComp = styled5(ActivityIndicator);
var StyledWindActivity = ({
  className,
  style,
  ...rest
}) => {
  return /* @__PURE__ */ React5.createElement(
    StyledWindActivityIndicatorComp,
    {
      className,
      style,
      ...rest
    }
  );
};

// src/components/StyledWindImageBackground.tsx
import React6 from "react";
import { styled as styled6 } from "nativewind";
import { ImageBackground } from "react-native";
var StyledWindImageBackgroundComp = styled6(ImageBackground);
var StyledWindImageBackground = ({ className, style, children, ...rest }) => {
  return /* @__PURE__ */ React6.createElement(
    StyledWindImageBackgroundComp,
    {
      className,
      style,
      ...rest
    },
    children
  );
};

// src/components/StyledWindExpoImage.tsx
import React7 from "react";
import { Image as Image2 } from "expo-image";
import { styled as styled7 } from "nativewind";
var StyledWindExpoImageComp = styled7(Image2);
var StyledWindExpoImage = ({
  className,
  style,
  ...rest
}) => {
  return /* @__PURE__ */ React7.createElement(StyledWindExpoImageComp, { className, style, ...rest });
};

// src/components/StyledWindScrollView.tsx
import React8 from "react";
import { styled as styled8 } from "nativewind";
import { ScrollView } from "react-native";
var StyledWindScrollViewComp = styled8(ScrollView);
var StyleWindScrollView = ({
  children,
  className,
  style,
  ...rest
}) => {
  return /* @__PURE__ */ React8.createElement(StyledWindScrollViewComp, { className, style, ...rest }, children);
};
export {
  StyleWindImage,
  StyleWindScrollView,
  StyledWindActivity,
  StyledWindExpoImage,
  StyledWindImageBackground,
  StyledWindPressable,
  StyledWindText,
  StyledWindView
};
//# sourceMappingURL=index.mjs.map