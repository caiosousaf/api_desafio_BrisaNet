"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = useUniqueId;

var _react = require("react");

var _uniqueId = _interopRequireDefault(require("lodash/uniqueId"));

/**
 * Used for generating unique ID for DOM elements
 *
 * @param idProp If id is provided, it will be used instead of generating a new one
 */
function useUniqueId(prefix, idProp) {
  var idRef = (0, _react.useRef)();

  if (!idRef.current) {
    idRef.current = (0, _uniqueId.default)(prefix);
  }

  return idProp !== null && idProp !== void 0 ? idProp : idRef.current;
}