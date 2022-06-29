import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { addMonths, isAfter, isSameMonth, setDate } from '../utils/dateUtils';
import CalendarCore, { CalendarState } from '../Calendar/Calendar';
import { DATERANGE_DISABLED_TARGET } from '../utils';

/**
 * Omit the time in the date, which is used to compare and judge the date.
 * eg: isAfter/isBefore
 */
function omitTime(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

var Calendar = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$as = props.as,
      Component = _props$as === void 0 ? CalendarCore : _props$as,
      _props$calendarDate = props.calendarDate,
      calendarDate = _props$calendarDate === void 0 ? [new Date(), addMonths(new Date(), 1)] : _props$calendarDate,
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
      rest = _objectWithoutPropertiesLoose(props, ["as", "calendarDate", "format", "disabledDate", "index", "limitEndYear", "onChangeCalendarDate", "onChangeCalendarTime", "onToggleMeridian", "showOneCalendar", "value"]);

  var _useState = useState(),
      calendarState = _useState[0],
      setCalendarState = _useState[1];

  var onMoveForward = useCallback(function (nextPageDate) {
    onChangeCalendarDate === null || onChangeCalendarDate === void 0 ? void 0 : onChangeCalendarDate(index, nextPageDate);
  }, [index, onChangeCalendarDate]);
  var onMoveBackward = useCallback(function (nextPageDate) {
    onChangeCalendarDate === null || onChangeCalendarDate === void 0 ? void 0 : onChangeCalendarDate(index, nextPageDate);
  }, [index, onChangeCalendarDate]);
  var handleChangePageDate = useCallback(function (nextPageDate) {
    onChangeCalendarDate === null || onChangeCalendarDate === void 0 ? void 0 : onChangeCalendarDate(index, nextPageDate);
    setCalendarState(undefined);
  }, [index, onChangeCalendarDate]);
  var handleChangePageTime = useCallback(function (nextPageDate) {
    onChangeCalendarTime === null || onChangeCalendarTime === void 0 ? void 0 : onChangeCalendarTime(index, nextPageDate);
  }, [index, onChangeCalendarTime]);
  var handleToggleMeridian = useCallback(function (event) {
    onToggleMeridian(index, event);
  }, [index, onToggleMeridian]);
  var toggleMonthDropdown = useCallback(function () {
    setCalendarState(calendarState === CalendarState.DROP_MONTH ? undefined : CalendarState.DROP_MONTH);
  }, [calendarState]);
  var toggleTimeDropdown = useCallback(function () {
    setCalendarState(calendarState === CalendarState.DROP_TIME ? undefined : CalendarState.DROP_TIME);
  }, [calendarState]);
  var inSameMonth = useCallback(function (date) {
    return isSameMonth(date, calendarDate[index]);
  }, [calendarDate, index]);
  var getCalendarDate = useCallback(function () {
    return calendarDate[index];
  }, [calendarDate, index]);
  var handleMoveForward = useCallback(function () {
    onMoveForward === null || onMoveForward === void 0 ? void 0 : onMoveForward(addMonths(getCalendarDate(), 1));
  }, [getCalendarDate, onMoveForward]);
  var handleMoveBackward = useCallback(function () {
    onMoveBackward === null || onMoveBackward === void 0 ? void 0 : onMoveBackward(addMonths(getCalendarDate(), -1));
  }, [getCalendarDate, onMoveBackward]);
  var disabledBackward = useCallback(function () {
    // Do not disable the Backward button on the first calendar.
    if (index === 0) {
      return false;
    }

    var startDate = setDate(addMonths(calendarDate[0], 1), 1);
    var endDate = setDate(omitTime(calendarDate[1]), 1);
    var after = isAfter(endDate, startDate);
    return !after;
  }, [calendarDate, index]);
  var disabledForward = useCallback(function () {
    // If only one calendar is displayed, do not disable
    if (showOneCalendar) {
      return false;
    } // Do not disable the Forward button on the second calendar.


    if (index === 1) {
      return false;
    }

    var startDate = setDate(addMonths(omitTime(calendarDate[0]), 1), 1);
    var endDate = setDate(omitTime(calendarDate[1]), 1);
    var after = isAfter(endDate, startDate);
    return !after;
  }, [calendarDate, index, showOneCalendar]);
  var disabledMonth = useCallback(function (date) {
    return disabledDate === null || disabledDate === void 0 ? void 0 : disabledDate(date, value, DATERANGE_DISABLED_TARGET.CALENDAR);
  }, [disabledDate, value]);
  return /*#__PURE__*/React.createElement(Component, _extends({}, rest, {
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
  value: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  hoverValue: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  calendarDate: PropTypes.arrayOf(PropTypes.instanceOf(Date)),
  index: PropTypes.number,
  format: PropTypes.string,
  isoWeek: PropTypes.bool,
  limitEndYear: PropTypes.number,
  classPrefix: PropTypes.string,
  disabledDate: PropTypes.func,
  onSelect: PropTypes.func,
  onMouseMove: PropTypes.func,
  onChangeCalendarDate: PropTypes.func
};
export default Calendar;