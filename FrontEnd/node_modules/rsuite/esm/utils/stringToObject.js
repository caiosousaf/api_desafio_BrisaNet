import isObject from 'lodash/isObject';
export default (function (value, labelKey, valueKey) {
  if (isObject(value)) {
    return value;
  }

  if (labelKey && valueKey) {
    var _ref;

    return _ref = {}, _ref[labelKey] = value, _ref[valueKey] = value, _ref;
  }

  return null;
});