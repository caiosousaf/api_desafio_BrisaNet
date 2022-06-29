"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _Form = _interopRequireDefault(require("../Form"));

var _formRef$current;

var formRef = /*#__PURE__*/_react.default.createRef();

/*#__PURE__*/
_react.default.createElement(_Form.default, {
  ref: formRef
});

(_formRef$current = formRef.current) === null || _formRef$current === void 0 ? void 0 : _formRef$current.check();