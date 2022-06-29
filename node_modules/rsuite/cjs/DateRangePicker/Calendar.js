"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _dateUtils = require("../utils/dateUtils");

var _Calendar = _interopRequireWildcard(require("../Calendar/Calendar"));

var _utils = require("../utils");

/**
 * Omit the time in the date, which is used to compare and judge the date.
 * eg: isAfter/isBefore
 */
function omitTime(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

var Calendar = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _props$as = props.as,
      Component = _props$as === void 0 ? _Calendar.default : _props$as,
      _props$calendarDate = props.calendarDate,
      calendarDate = _props$calendarDate === void 0 ? [new Date(), (0, _dateUtils.addMonths)(new Date(), 1)] : _props$calendarDate,
      _props$format = props.format,
      format = _props$format === void 0 ? 'yyyy-MM-dd' : _props$format,
      disabledDate = props.disabledDate,
      _props$index = props.index,
      index = _props$index === void 0 ? 0 : _props$index,
      limitEndYear = props.limitEndYear,
      onChangeCalendarDate = props.onChangeCalendarDate,
      onChangeCalendarTime = props.onChangeCalendarTime,
      onToggleMeridian = props.onToggleMeridian,
      showOneCalendar = props.showOneCalendar,
      _props$value = props.value,
      value = _props$value === void 0 ? [] : _props$value,
      rest = (0, _objectWithoutPropertiesLoose2.default)(props, ["as", "calendarDate", "format", "disabledDate", "index", "limitEndYear", "onChangeCalendarDate", "onChangeCalendarTime", "onToggleMeridian", "showOneCalendar", "value"]);

  var _useState = (0, _react.useState)(),
      calendarState = _useState[0],
      setCalendarState = _useState[1];

  var onMoveForward = (0, _react.useCallback)(function (nextPageDate) {
    onChangeCalendarDate === null || onChangeCalendarDate === void 0 ? void 0 : onChangeCalendarDate(index, nextPageDate);
  }, [index, onChangeCalendarDate]);
  var onMoveBackward = (0, _react.useCallback)(function (nextPageDate) {
    onChangeCalendarDate === null || onChangeCalendarDate === void 0 ? void 0 : onChangeCalendarDate(index, nextPageDate);
  }, [index, onChangeCalendarDate]);
  var handleChangePageDate = (0, _react.useCallback)(function (nextPageDate) {
    onChangeCalendarDate === null || onChangeCalendarDate === void 0 ? void 0 : onChangeCalendarDate(index, nextPageDate);
    setCalendarState(undefined);
  }, [index, onChangeCalendarDate]);
  var handleChangePageTime = (0, _react.useCallback)(function (nextPageDate) {
    onChangeCalendarTime === null || onChangeCalendarTime === void 0 ? void 0 : onChangeCalendarTime(index, nextPageDate);
  }, [index, onChangeCalendarTime]);
  var handleToggleMeridian = (0, _react.useCallback)(function (event) {
    onToggleMeridian(index, event);
  }, [index, onToggleMeridian]);
  var toggleMonthDropdown = (0, _react.useCallback)(function () {
    setCalendarState(calendarState === _Calendar.CalendarState.DROP_MONTH ? undefined : _Calendar.CalendarState.DROP_MONTH);
  }, [calendarState]);
  var toggleTimeDropdown = (0, _react.useCallback)(function () {
    setCalendarState(calendarState === _Calendar.CalendarState.DROP_TIME ? undefined : _Calendar.CalendarState.DROP_TIME);
  }, [calendarState]);
  var inSameMonth = (0, _react.useCallback)(function (date) {
    return (0, _dateUtils.isSameMonth)(date, calendarDate[index]);
  }, [calendarDate, index]);
  var getCalendarDate = (0, _react.useCallback)(function () {
    return calendarDate[index];
  }, [calendarDate, index]);
  var handleMoveForward = (0, _react.useCallback)(function () {
    onMoveForward === null || onMoveForward === void 0 ? void 0 : onMoveForward((0, _dateUtils.addMonths)(getCalendarDate(), 1));
  }, [getCalendarDate, onMoveForward]);
  var handleMoveBackward = (0, _react.useCallback)(function () {
    onMoveBackward === null || onMoveBackward === void 0 ? void 0 : onMoveBackward((0, _dateUtils.addMonths)(getCalendarDate(), -1));
  }, [getCalendarDate, onMoveBackward]);
  var disabledBackward = (0, _react.useCallback)(function () {
    // Do not disable the Backward button on the first calendar.
    if (index === 0) {
      return false;
    }

    var startDate = (0, _dateUtils.setDate)((0, _dateUtils.addMonths)(calendarDate[0], 1), 1);
    var endDate = (0, _dateUtils.setDate)(omitTime(calendarDate[1]), 1);
    var after = (0, _dateUtils.isAfter)(endDate, startDate);
    return !after;
  }, [calendarDate, index]);
  var disabledForward = (0, _react.useCallback)(function () {
    // If only one calendar is displayed, do not disable
    if (showOneCalendar) {
      return false;
    } // Do not disable the Forward button on the second calendar.


    if (index === 1) {
      return false;
    }

    var startDate = (0, _dateUtils.setDate)((0, _dateUtils.addMonths)(omitTime(calendarDate[0]), 1), 1);
    var endDate = (0, _dateUtils.setDate)(omitTime(calendarDate[1]), 1);
    var after = (0, _dateUtils.isAfter)(endDate, startDate);
    return !after;
  }, [calendarDate, index, showOneCalendar]);
  var disabledMonth = (0, _react.useCallback)(function (date) {
    return disabledDate === null || disabledDate === void 0 ? void 0 : disabledDate(date, value, _utils.DATERANGE_DISABLED_TARGET.CALENDAR);
  }, [disabledDate, value]);
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, rest, {
    format: format,
    calendarState: calendarState,
    dateRange: value,
    disabledBackward: disabledBackward(),
    disabledDate: disabledMonth,
    disabledForward: disabledForward(),
    inSameMonth: inSameMonth,
    index: index,
    limitEndYear: limitEndYear,
    onChangePageDate: handleChangePageDate,
    onChangePageTime: handleChangePageTime,
    onMoveBackward: handleMoveBackward,
    onMoveForward: handleMoveForward,
    onToggleMonthDropdown: toggleMonthDropdown,
    onToggleTimeDropdown: toggleTimeDropdown,
    onToggleMeridian: handleToggleMeridian,
    calendarDate: getCalendarDate(),
    ref: ref
  }));
});

Calendar.displayName = 'DateRangePicker.Calendar';
Calendar.propTypes = {
  value: _propTypes.default.arrayOf(_propTypes.default.instanceOf(Date)),
  hoverValue: _propTypes.default.arrayOf(_propTypes.default.instanceOf(Date)),
  calendarDate: _propTypes.default.arrayOf(_propTypes.default.instanceOf(Date)),
  index: _propTypes.default.number,
  format: _propTypes.default.string,
  isoWeek: _propTypes.default.bool,
  limitEndYear: _propTypes.default.number,
  classPrefix: _propTypes.default.string,
  disabledDate: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  onMouseMove: _propTypes.default.func,
  onChangeCalendarDate: _propTypes.default.func
};
var _default = Calendar;
exports.default = _default;