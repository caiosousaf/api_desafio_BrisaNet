import React from 'react';
import { expectType } from 'ts-expect';
import SelectPicker from '../SelectPicker'; // Infer value and onChange types from data

var numberValuedData = [{
  label: 'One',
  value: 1
}];

/*#__PURE__*/
React.createElement(SelectPicker, {
  data: numberValuedData,
  value: 1
}); // @ts-expect-error should not accept string value

/*#__PURE__*/
React.createElement(SelectPicker, {
  data: numberValuedData,
  value: "1"
});

/*#__PURE__*/
React.createElement(SelectPicker, {
  data: numberValuedData,
  onChange: function onChange(newValue) {
    expectType(newValue);
  }
});
var stringValuedData = [{
  label: 'One',
  value: 'One'
}];

/*#__PURE__*/
React.createElement(SelectPicker, {
  data: stringValuedData,
  value: "1"
}); // @ts-expect-error should not accept number value

/*#__PURE__*/
React.createElement(SelectPicker, {
  data: stringValuedData,
  value: 1
});

/*#__PURE__*/
React.createElement(SelectPicker, {
  data: stringValuedData,
  onChange: function onChange(newValue) {
    expectType(newValue);
  }
});
var pickerRef = /*#__PURE__*/React.createRef();

/*#__PURE__*/
React.createElement(SelectPicker, {
  ref: pickerRef,
  data: []
});