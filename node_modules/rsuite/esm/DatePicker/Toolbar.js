import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import { useClassNames, useUpdateEffect } from '../utils';
import { getDefaultRanges, getRanges } from './utils';

/**
 * Toolbar for DatePicker and DateRangePicker
 */
var Toolbar = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var className = props.className,
      _props$classPrefix = props.classPrefix,
      classPrefix = _props$classPrefix === void 0 ? 'picker-toolbar' : _props$classPrefix,
      disabledOkBtn = props.disabledOkBtn,
      disabledShortcut = props.disabledShortcut,
      hideOkBtn = props.hideOkBtn,
      onOk = props.onOk,
      onClickShortcut = props.onClickShortcut,
      calendarDate = props.calendarDate,
      rangesProp = props.ranges,
      locale = props.locale,
      rest = _objectWithoutPropertiesLoose(props, ["className", "classPrefix", "disabledOkBtn", "disabledShortcut", "hideOkBtn", "onOk", "onClickShortcut", "calendarDate", "ranges", "locale"]);

  var _useState = useState(getRanges(props)),
      ranges = _useState[0],
      setRanges = _useState[1];

  var _useClassNames = useClassNames(classPrefix),
      merge = _useClassNames.merge,
      prefix = _useClassNames.prefix,
      withClassPrefix = _useClassNames.withClassPrefix;

  useUpdateEffect(function () {
    setRanges(getRanges({
      ranges: rangesProp,
      calendarDate: calendarDate
    }));
  }, [calendarDate, rangesProp]);
  var hasLocaleKey = useCallback(function (key) {
    return getDefaultRanges(calendarDate).some(function (item) {
      return item.label === key;
    });
  }, [calendarDate]);
  var renderOkButton = useCallback(function () {
    if (hideOkBtn) {
      return null;
    }

    var disabled = disabledOkBtn === null || disabledOkBtn === void 0 ? void 0 : disabledOkBtn(calendarDate);
    return /*#__PURE__*/React.createElement("div", {
      className: prefix('right')
    }, /*#__PURE__*/React.createElement(Button, {
      appearance: "primary",
      size: "sm",
      disabled: disabled,
      onClick: disabled ? undefined : onOk
    }, locale === null || locale === void 0 ? void 0 : locale.ok));
  }, [disabledOkBtn, hideOkBtn, locale, onOk, calendarDate, prefix]);

  if (hideOkBtn && ranges.length === 0) {
    return null;
  }

  var classes = merge(className, withClassPrefix());
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    ref: ref,
    className: classes
  }), /*#__PURE__*/React.createElement("div", {
    className: prefix('ranges')
  }, ranges.map(function (_ref, index) {
    var value = _ref.value,
        closeOverlay = _ref.closeOverlay,
        label = _ref.label;
    var disabled = disabledShortcut === null || disabledShortcut === void 0 ? void 0 : disabledShortcut(value);

    var handleClickShortcut = function handleClickShortcut(event) {
      if (disabled) {
        return;
      }

      onClickShortcut === null || onClickShortcut === void 0 ? void 0 : onClickShortcut(value, closeOverlay !== null && closeOverlay !== void 0 ? closeOverlay : false, event);
    };

    return /*#__PURE__*/React.createElement(Button, {
      appearance: "link",
      size: "sm",
      key: index,
      disabled: disabled,
      onClick: handleClickShortcut
    }, hasLocaleKey(label) && typeof label === 'string' ? locale === null || locale === void 0 ? void 0 : locale[label] : label);
  })), renderOkButton());
});
Toolbar.displayName = 'Toolbar';
Toolbar.propTypes = {
  ranges: PropTypes.array,
  className: PropTypes.string,
  classPrefix: PropTypes.string,
  calendarDate: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.arrayOf(PropTypes.instanceOf(Date))]).isRequired,
  onClickShortcut: PropTypes.func,
  onOk: PropTypes.func,
  disabledShortcut: PropTypes.func,
  disabledOkBtn: PropTypes.func,
  hideOkBtn: PropTypes.bool
};
export default Toolbar;