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
  children,
  className,
  style,
  ...rest
}) => {
  return /* @__PURE__ */ import_react.default.createElement(StyledWindViewComp, { className, style, ...rest }, children);
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

// src/StyledWindPressable.tsx
var import_react3 = __toESM(require("react"));
var import_react_native3 = require("react-native");
var import_nativewind3 = require("nativewind");
var StyledWindPressableComp = (0, import_nativewind3.styled)(import_react_native3.Pressable);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  StyledWindText,
  StyledWindView
});
//# sourceMappingURL=index.js.map