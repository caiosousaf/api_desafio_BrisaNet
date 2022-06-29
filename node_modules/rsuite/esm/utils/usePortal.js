import { useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import canUseDOM from 'dom-lib/canUseDOM';

function usePortal(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      id = _props.id,
      container = _props.container;
  var rootElemRef = useRef(canUseDOM ? document.body : null);
  useEffect(function () {
    var containerElement = typeof container === 'function' ? container() : container; // Look for existing target dom element to append to

    var existingParent = id && document.querySelector("#" + id); // Parent is either a new root or the existing dom element

    var parentElement = containerElement || existingParent || document.body;
    rootElemRef.current = parentElement;
  }, [rootElemRef, container, id]);
  var Portal = useCallback(function (_ref) {
    var children = _ref.children;
    if (rootElemRef.current != null) return /*#__PURE__*/createPortal(children, rootElemRef.current);
    return null;
  }, [rootElemRef]);
  return {
    target: rootElemRef.current,
    Portal: Portal
  };
}

export default usePortal;