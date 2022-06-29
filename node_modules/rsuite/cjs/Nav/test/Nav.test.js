"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _Navbar = _interopRequireDefault(require("../../Navbar"));

var _Nav = _interopRequireDefault(require("../Nav"));

/*#__PURE__*/
_react.default.createElement(_Navbar.default, null, /*#__PURE__*/_react.default.createElement(_Nav.default, null, /*#__PURE__*/_react.default.createElement(_Nav.default.Menu, {
  title: "Menu"
}, /*#__PURE__*/_react.default.createElement(_Nav.default.Menu, {
  title: "Submenu",
  openDirection: "start"
}, /*#__PURE__*/_react.default.createElement(_Nav.default.Item, null, "Submenu item")))));