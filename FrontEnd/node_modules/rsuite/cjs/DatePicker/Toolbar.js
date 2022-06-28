"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("../Button"));

var _utils = require("../utils");

var _utils2 = require("./utils");

/**
 * Toolbar for DatePicker and DateRangePicker
 */
var Toolbar = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
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
      rest = (0, _objectWithoutPropertiesLoose2.default)(props, ["className", "classPrefix", "disabledOkBtn", "disabledShortcut", "hideOkBtn", "onOk", "onClickShortcut", "calendarDate", "ranges", "locale"]);

  var _useState = (0, _react.useState)((0, _utils2.getRanges)(props)),
      ranges = _useState[0],
      setRanges = _useState[1];

  var _useClassNames = (0, _utils.useClassNames)(classPrefix),
      merge = _useClassNames.merge,
      prefix = _useClassNames.prefix,
      withClassPrefix = _useClassNames.withClassPrefix;

  (0, _utils.useUpdateEffect)(function () {
    setRanges((0, _utils2.getRanges)({
      ranges: rangesProp,
      calendarDate: calendarDate
    }));
  }, [calendarDate, rangesProp]);
  var hasLocaleKey = (0, _react.useCallback)(function (key) {
    return (0, _utils2.getDefaultRanges)(calendarDate).some(function (item) {
      return item.label === key;
    });
  }, [calendarDate]);
  var renderOkButton = (0, _react.useCallback)(function () {
    if (hideOkBtn) {
      return null;
    }

    var disabled = disabledOkBtn === null || disabledOkBtn === void 0 ? void 0 : disabledOkBtn(calendarDate);
    return /*#__PURE__*/_react.default.createElement("div", {
      className: prefix('right')
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
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
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, rest, {
    ref: ref,
    className: classes
  }), /*#__PURE__*/_react.default.createElement("div", {
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

    return /*#__PURE__*/_react.default.createElement(_Button.default, {
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
  ranges: _propTypes.default.array,
  className: _propTypes.default.string,
  classPrefix: _propTypes.default.string,
  calendarDate: _propTypes.default.oneOfType([_propTypes.default.instanceOf(Date), _propTypes.default.arrayOf(_propTypes.default.instanceOf(Date))]).isRequired,
  onClickShortcut: _propTypes.default.func,
  onOk: _propTypes.default.func,
  disabledShortcut: _propTypes.default.func,
  disabledOkBtn: _propTypes.default.func,
  hideOkBtn: _propTypes.default.bool
};
var _default = Toolbar;
exports.default = _default;