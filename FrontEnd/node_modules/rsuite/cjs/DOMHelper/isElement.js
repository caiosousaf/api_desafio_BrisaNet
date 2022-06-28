"use strict";

exports.__esModule = true;
exports.default = void 0;

var isElement = function isElement(node) {
  return (node === null || node === void 0 ? void 0 : node.nodeType) === 1 && typeof (node === null || node === void 0 ? void 0 : node.nodeName) === 'string';
};

var _default = isElement;
exports.default = _default;