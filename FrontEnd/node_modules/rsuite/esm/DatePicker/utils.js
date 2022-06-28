import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
import { useCallback, useState } from 'react';
import { setTimingMargin } from '../DateRangePicker/utils';
import { subDays } from '../utils/dateUtils';
import { CalendarState } from '../Calendar';
export function getDefaultRanges(date) {
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
        value: [setTimingMargin(todayDate), setTimingMargin(todayDate, 'right')]
      } : {
        closeOverlay: true,
        value: todayDate
      },
      yesterday: isRange ? {
        value: [setTimingMargin(subDays(todayDate, 1)), setTimingMargin(subDays(todayDate, 1), 'right')]
      } : {
        closeOverlay: true,
        value: subDays(todayDate, 1)
      },
      last7Days: {
        value: [setTimingMargin(subDays(todayDate, 6)), setTimingMargin(todayDate, 'right')]
      }
    };
    return _extends({
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
        rest = _objectWithoutPropertiesLoose(_ref2, ["value"]);

    value = typeof value === 'function' ? value(calendarDate) : value;
    return _extends({
      value: value
    }, rest);
  };
};
/**
 * get Toolbar ranges from Toolbar props
 * @param ranges
 * @param calendarDate
 */


export var getRanges = function getRanges(_ref3) {
  var ranges = _ref3.ranges,
      calendarDate = _ref3.calendarDate;
  return typeof ranges === 'undefined' ? getDefaultRanges(calendarDate) : ranges.map(generateRangesIterator({
    calendarDate: calendarDate
  }));
};
export var useCalendarState = function useCalendarState() {
  var _useState = useState(),
      calendarState = _useState[0],
      setCalendarState = _useState[1];

  var reset = useCallback(function () {
    setCalendarState(undefined);
  }, []);
  var openMonth = useCallback(function () {
    setCalendarState(CalendarState.DROP_MONTH);
  }, []);
  var openTime = useCallback(function () {
    setCalendarState(CalendarState.DROP_TIME);
  }, []);
  return {
    calendarState: calendarState,
    reset: reset,
    openMonth: openMonth,
    openTime: openTime
  };
};