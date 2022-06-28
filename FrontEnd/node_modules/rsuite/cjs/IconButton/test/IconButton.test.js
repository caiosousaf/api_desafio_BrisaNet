"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _IconButton = _interopRequireDefault(require("../IconButton"));

var Link = function Link(_ref) {
  var to = _ref.to;
  return /*#__PURE__*/_react.default.createElement("a", {
    href: to
  });
};

var ref = /*#__PURE__*/_react.default.createRef(); // Infer `as` component props


/*#__PURE__*/
_react.default.createElement(_IconButton.default, {
  ref: ref,
  as: Link,
  to: "/home"
});