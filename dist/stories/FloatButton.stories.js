"use strict";

var _interopRequireDefault = require("/Users/admin/Documents/Developer/Edesoft/storybook-float-button/node_modules/@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Menu = exports.default = void 0;

var _FloatButton = _interopRequireDefault(require("../components/FloatButton"));

var _default = {
  title: "Components/FloatButton",
  component: _FloatButton.default
};
exports.default = _default;

var Menu = function Menu() {
  return /*#__PURE__*/React.createElement(_FloatButton.default, null);
};

exports.Menu = Menu;