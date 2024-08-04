"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  StyleWindImage: () => StyleWindImage,
  StyleWindScrollView: () => StyleWindScrollView,
  StyledWindActivity: () => StyledWindActivity,
  StyledWindExpoImage: () => StyledWindExpoImage,
  StyledWindImageBackground: () => StyledWindImageBackground,
  StyledWindPressable: () => StyledWindPressable,
  StyledWindText: () => StyledWindText,
  StyledWindView: () => StyledWindView
});
module.exports = __toCommonJS(src_exports);

// src/components/StyledWindView.tsx
var import_nativewind = require("nativewind");
var import_react_native = require("react-native");
var import_react = __toESM(require("react"));
var StyledWindViewComp = (0, import_nativewind.styled)(import_react_native.View);
var StyledWindView = ({
  // children,
  className,
  style,
  ...rest
}) => {
  return /* @__PURE__ */ import_react.default.createElement(StyledWindViewComp, { className, style, ...rest });
};

// src/components/StyledWindText.tsx
var import_nativewind2 = require("nativewind");
var import_react_native2 = require("react-native");
var import_react2 = __toESM(require("react"));
var StyledWindTextComp = (0, import_nativewind2.styled)(import_react_native2.Text);
var StyledWindText = ({
  children,
  className,
  style,
  ...rest
}) => {
  return /* @__PURE__ */ import_react2.default.createElement(StyledWindTextComp, { className, style, ...rest }, children);
};

// src/components/StyledWindPressable.tsx
var import_react3 = __toESM(require("react"));
var import_react_native3 = require("react-native");
var import_nativewind3 = require("nativewind");
var StyledWindPressableComp = (0, import_nativewind3.styled)(import_react_native3.Pressable);
var StyledWindPressable = ({
  children,
  className,
  style,
  ...rest
}) => {
  return /* @__PURE__ */ import_react3.default.createElement(StyledWindPressableComp, { className, style, ...rest }, children);
};

// src/components/StyledWindImage.tsx
var import_react4 = __toESM(require("react"));
var import_nativewind4 = require("nativewind");
var import_react_native4 = require("react-native");
var StyledWindImageComp = (0, import_nativewind4.styled)(import_react_native4.Image);
var StyleWindImage = ({
  className,
  style,
  ...rest
}) => {
  return /* @__PURE__ */ import_react4.default.createElement(StyledWindImageComp, { className, style, ...rest });
};

// src/components/StyledWindActivity.tsx
var import_react5 = __toESM(require("react"));
var import_nativewind5 = require("nativewind");
var import_react_native5 = require("react-native");
var StyledWindActivityIndicatorComp = (0, import_nativewind5.styled)(import_react_native5.ActivityIndicator);
var StyledWindActivity = ({
  className,
  style,
  ...rest
}) => {
  return /* @__PURE__ */ import_react5.default.createElement(
    StyledWindActivityIndicatorComp,
    {
      className,
      style,
      ...rest
    }
  );
};

// src/components/StyledWindImageBackground.tsx
var import_react6 = __toESM(require("react"));
var import_nativewind6 = require("nativewind");
var import_react_native6 = require("react-native");
var StyledWindImageBackgroundComp = (0, import_nativewind6.styled)(import_react_native6.ImageBackground);
var StyledWindImageBackground = ({ className, style, children, ...rest }) => {
  return /* @__PURE__ */ import_react6.default.createElement(
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
var import_react7 = __toESM(require("react"));
var import_expo_image = require("expo-image");
var import_nativewind7 = require("nativewind");
var StyledWindExpoImageComp = (0, import_nativewind7.styled)(import_expo_image.Image);
var StyledWindExpoImage = ({
  className,
  style,
  ...rest
}) => {
  return /* @__PURE__ */ import_react7.default.createElement(StyledWindExpoImageComp, { className, style, ...rest });
};

// src/components/StyledWindScrollView.tsx
var import_react8 = __toESM(require("react"));
var import_nativewind8 = require("nativewind");
var import_react_native7 = require("react-native");
var StyledWindScrollViewComp = (0, import_nativewind8.styled)(import_react_native7.ScrollView);
var StyleWindScrollView = ({
  children,
  className,
  style,
  ...rest
}) => {
  return /* @__PURE__ */ import_react8.default.createElement(StyledWindScrollViewComp, { className, style, ...rest }, children);
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  StyleWindImage,
  StyleWindScrollView,
  StyledWindActivity,
  StyledWindExpoImage,
  StyledWindImageBackground,
  StyledWindPressable,
  StyledWindText,
  StyledWindView
});
//# sourceMappingURL=index.js.map