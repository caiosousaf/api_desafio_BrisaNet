import React from 'react';
import IconButton from '../IconButton';

var Link = function Link(_ref) {
  var to = _ref.to;
  return /*#__PURE__*/React.createElement("a", {
    href: to
  });
};

var ref = /*#__PURE__*/React.createRef(); // Infer `as` component props

/*#__PURE__*/
React.createElement(IconButton, {
  ref: ref,
  as: Link,
  to: "/home"
});