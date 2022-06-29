"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.getDefaultRanges = getDefaultRanges;
exports.useCalendarState = exports.getRanges = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = require("react");

var _utils = require("../DateRangePicker/utils");

var _dateUtils = require("../utils/dateUtils");

var _Calendar = require("../Calendar");

function getDefaultRanges(date) {
  var todayDate = new Date();
  /**
   * Is Date[] type
   * If it is an array type, it returns the default shortcut key suitable for DateRangePicker Toolbar,
   * otherwise it returns the default shortcut key suitable for DatePicker Toolbar
   */

  var isRange = date instanceof Array;
  var rangeKeys = ['today', 'yesterday'];

  function rangeIterator(label) {
    var defaultRange = {
      today: isRange ? {
        value: [(0, _utils.setTimingMargin)(todayDate), (0, _utils.setTimingMargin)(todayDate, 'right')]
      } : {
        closeOverlay: true,
        value: todayDate
      },
      yesterday: isRange ? {
        value: [(0, _utils.setTimingMargin)((0, _dateUtils.subDays)(todayDate, 1)), (0, _utils.setTimingMargin)((0, _dateUtils.subDays)(todayDate, 1), 'right')]
      } : {
        closeOverlay: true,
        value: (0, _dateUtils.subDays)(todayDate, 1)
      },
      last7Days: {
        value: [(0, _utils.setTimingMargin)((0, _dateUtils.subDays)(todayDate, 6)), (0, _utils.setTimingMargin)(todayDate, 'right')]
      }
    };
    return (0, _extends2.default)({
      label: label
    }, defaultRange[label]);
  }

  isRange && rangeKeys.push('last7Days');
  return rangeKeys.map(rangeIterator);
}

var generateRangesIterator = function generateRangesIterator(_ref) {
  var calendarDate = _ref.calendarDate;
  return function (_ref2) {
    var value = _ref2.value,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["value"]);
    value = typeof value === 'function' ? value(calendarDate) : value;
    return (0, _extends2.default)({
      value: value
    }, rest);
  };
};
/**
 * get Toolbar ranges from Toolbar props
 * @param ranges
 * @param calendarDate
 */


var getRanges = function getRanges(_ref3) {
  var ranges = _ref3.ranges,
      calendarDate = _ref3.calendarDate;
  return typeof ranges === 'undefined' ? getDefaultRanges(calendarDate) : ranges.map(generateRangesIterator({
    calendarDate: calendarDate
  }));
};

exports.getRanges = getRanges;

var useCalendarState = function useCalendarState() {
  var _useState = (0, _react.useState)(),
      calendarState = _useState[0],
      setCalendarState = _useState[1];

  var reset = (0, _react.useCallback)(function () {
    setCalendarState(undefined);
  }, []);
  var openMonth = (0, _react.useCallback)(function () {
    setCalendarState(_Calendar.CalendarState.DROP_MONTH);
  }, []);
  var openTime = (0, _react.useCallback)(function () {
    setCalendarState(_Calendar.CalendarState.DROP_TIME);
  }, []);
  return {
    calendarState: calendarState,
    reset: reset,
    openMonth: openMonth,
    openTime: openTime
  };
};

exports.useCalendarState = useCalendarState;