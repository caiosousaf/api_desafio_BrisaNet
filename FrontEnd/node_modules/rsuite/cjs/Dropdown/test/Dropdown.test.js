"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _Dropdown = _interopRequireDefault(require("../Dropdown"));

var ref = /*#__PURE__*/_react.default.createRef(); // Infer `toggleAs` props (defaults to Button)


/*#__PURE__*/
_react.default.createElement(_Dropdown.default, {
  ref: ref,
  appearance: "subtle",
  size: "sm"
});
/* eslint-disable @typescript-eslint/no-unused-vars */


var CustomToggle = function CustomToggle(_props) {
  return null;
};

/*#__PURE__*/
_react.default.createElement(_Dropdown.default, {
  ref: ref,
  toggleAs: CustomToggle,
  myProp: "myValue"
});