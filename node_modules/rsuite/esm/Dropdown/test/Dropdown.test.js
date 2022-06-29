import React from 'react';
import Dropdown from '../Dropdown';
var ref = /*#__PURE__*/React.createRef(); // Infer `toggleAs` props (defaults to Button)

/*#__PURE__*/
React.createElement(Dropdown, {
  ref: ref,
  appearance: "subtle",
  size: "sm"
});
/* eslint-disable @typescript-eslint/no-unused-vars */

var CustomToggle = function CustomToggle(_props) {
  return null;
};

/*#__PURE__*/
React.createElement(Dropdown, {
  ref: ref,
  toggleAs: CustomToggle,
  myProp: "myValue"
});