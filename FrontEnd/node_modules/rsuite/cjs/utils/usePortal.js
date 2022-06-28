"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _react = require("react");

var _reactDom = require("react-dom");

var _canUseDOM = _interopRequireDefault(require("dom-lib/canUseDOM"));

function usePortal(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      id = _props.id,
      container = _props.container;
  var rootElemRef = (0, _react.useRef)(_canUseDOM.default ? document.body : null);
  (0, _react.useEffect)(function () {
    var containerElement = typeof container === 'function' ? container() : container; // Look for existing target dom element to append to

    var existingParent = id && document.querySelector("#" + id); // Parent is either a new root or the existing dom element

    var parentElement = containerElement || existingParent || document.body;
    rootElemRef.current = parentElement;
  }, [rootElemRef, container, id]);
  var Portal = (0, _react.useCallback)(function (_ref) {
    var children = _ref.children;
    if (rootElemRef.current != null) return /*#__PURE__*/(0, _reactDom.createPortal)(children, rootElemRef.current);
    return null;
  }, [rootElemRef]);
  return {
    target: rootElemRef.current,
    Portal: Portal
  };
}

var _default = usePortal;
exports.default = _default;