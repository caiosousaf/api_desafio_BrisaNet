import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import pick from 'lodash/pick';
import MonthDropdown from './MonthDropdown';
import TimeDropdown from './TimeDropdown';
import View from './View';
import Header from './Header';
import { useClassNames, DateUtils, composeFunctions } from '../utils';
import { CalendarProvider } from './CalendarContext';
export var CalendarState;

(function (CalendarState) {
  CalendarState["DROP_TIME"] = "DROP_TIME";
  CalendarState["DROP_MONTH"] = "DROP_MONTH";
})(CalendarState || (CalendarState = {}));

var Calendar = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$as = props.as,
      Component = _props$as === void 0 ? 'div' : _props$as,
      className = props.className,
      _props$classPrefix = props.classPrefix,
      classPrefix = _props$classPrefix === void 0 ? 'calendar' : _props$classPrefix,
      calendarState = props.calendarState,
      dateRange = props.dateRange,
      disabledBackward = props.disabledBackward,
      disabledDate = props.disabledDate,
      disabledForward = props.disabledForward,
      format = props.format,
      hoverRangeValue = props.hoverRangeValue,
      inSameMonth = props.inSameMonth,
      _props$isoWeek = props.isoWeek,
      isoWeek = _props$isoWeek === void 0 ? false : _props$isoWeek,
      limitEndYear = props.limitEndYear,
      locale = props.locale,
      onChangePageDate = props.onChangePageDate,
      onChangePageTime = props.onChangePageTime,
      onMouseMove = props.onMouseMove,
      onMoveBackward = props.onMoveBackward,
      onMoveForward = props.onMoveForward,
      onSelect = props.onSelect,
      onToggleMeridian = props.onToggleMeridian,
      onToggleMonthDropdown = props.onToggleMonthDropdown,
      onToggleTimeDropdown = props.onToggleTimeDropdown,
      calendarDate = props.calendarDate,
      renderCell = props.renderCell,
      renderTitle = props.renderTitle,
      renderToolbar = props.renderToolbar,
      showMeridian = props.showMeridian,
      showWeekNumbers = props.showWeekNumbers,
      inline = props.inline,
      rest = _objectWithoutPropertiesLoose(props, ["as", "className", "classPrefix", "calendarState", "dateRange", "disabledBackward", "disabledDate", "disabledForward", "format", "hoverRangeValue", "inSameMonth", "isoWeek", "limitEndYear", "locale", "onChangePageDate", "onChangePageTime", "onMouseMove", "onMoveBackward", "onMoveForward", "onSelect", "onToggleMeridian", "onToggleMonthDropdown", "onToggleTimeDropdown", "calendarDate", "renderCell", "renderTitle", "renderToolbar", "showMeridian", "showWeekNumbers", "inline"]);

  var _useClassNames = useClassNames(classPrefix),
      withClassPrefix = _useClassNames.withClassPrefix,
      merge = _useClassNames.merge;

  var isDisabledDate = useCallback(function (date) {
    var _disabledDate;

    return (_disabledDate = disabledDate === null || disabledDate === void 0 ? void 0 : disabledDate(date)) !== null && _disabledDate !== void 0 ? _disabledDate : false;
  }, [disabledDate]);

  var isTimeDisabled = function isTimeDisabled(date) {
    return DateUtils.disabledTime(props, date);
  };

  var handleMoveForward = useCallback(function () {
    onMoveForward === null || onMoveForward === void 0 ? void 0 : onMoveForward(DateUtils.addMonths(calendarDate, 1));
  }, [onMoveForward, calendarDate]);
  var handleMoveBackward = useCallback(function () {
    onMoveBackward === null || onMoveBackward === void 0 ? void 0 : onMoveBackward(DateUtils.addMonths(calendarDate, -1));
  }, [onMoveBackward, calendarDate]);
  var showDate = DateUtils.shouldDate(format);
  var showTime = DateUtils.shouldTime(format);
  var showMonth = DateUtils.shouldMonth(format);
  var onlyShowTime = showTime && !showDate && !showMonth;
  var onlyShowMonth = showMonth && !showDate && !showTime;
  var dropTime = calendarState === CalendarState.DROP_TIME || onlyShowTime;
  var dropMonth = calendarState === CalendarState.DROP_MONTH || onlyShowMonth;
  var inSameThisMonthDate = useCallback(function (date) {
    return composeFunctions(function (d) {
      return DateUtils.setDate(d, 1);
    }, function (d) {
      return DateUtils.isSameMonth(d, date);
    })(date);
  }, []);
  var calendarClasses = merge(className, withClassPrefix({
    'show-time-dropdown': dropTime,
    'show-month-dropdown': dropMonth,
    'show-week-numbers': showWeekNumbers
  }));
  var timeDropdownProps = pick(rest, DateUtils.calendarOnlyProps);
  var contextValue = useMemo(function () {
    return {
      date: calendarDate,
      dateRange: dateRange,
      disabledDate: isDisabledDate,
      format: format,
      hoverRangeValue: hoverRangeValue,
      inSameMonth: inSameMonth !== null && inSameMonth !== void 0 ? inSameMonth : inSameThisMonthDate,
      isoWeek: isoWeek,
      locale: locale,
      onChangePageDate: onChangePageDate,
      onChangePageTime: onChangePageTime,
      onMouseMove: onMouseMove,
      onSelect: onSelect,
      renderCell: renderCell,
      showWeekNumbers: showWeekNumbers,
      inline: inline
    };
  }, [calendarDate, dateRange, format, hoverRangeValue, inSameMonth, inSameThisMonthDate, inline, isDisabledDate, isoWeek, locale, onChangePageDate, onChangePageTime, onMouseMove, onSelect, renderCell, showWeekNumbers]);
  return /*#__PURE__*/React.createElement(CalendarProvider, {
    value: contextValue
  }, /*#__PURE__*/React.createElement(Component, _extends({}, DateUtils.omitHideDisabledProps(rest), {
    className: calendarClasses,
    ref: ref
  }), /*#__PURE__*/React.createElement(Header, {
    showMonth: showMonth,
    showDate: showDate,
    showTime: showTime,
    showMeridian: showMeridian,
    disabledTime: isTimeDisabled,
    onMoveForward: handleMoveForward,
    onMoveBackward: handleMoveBackward,
    onToggleMonthDropdown: onToggleMonthDropdown,
    onToggleTimeDropdown: onToggleTimeDropdown,
    onToggleMeridian: onToggleMeridian,
    renderTitle: renderTitle,
    renderToolbar: renderToolbar,
    disabledBackward: disabledBackward,
    disabledForward: disabledForward
  }), showDate && /*#__PURE__*/React.createElement(View, null), showMonth && /*#__PURE__*/React.createElement(MonthDropdown, {
    show: dropMonth,
    limitEndYear: limitEndYear,
    disabledMonth: isDisabledDate
  }), showTime && /*#__PURE__*/React.createElement(TimeDropdown, _extends({}, timeDropdownProps, {
    show: dropTime,
    showMeridian: showMeridian
  }))));
});
Calendar.displayName = 'Calendar';
Calendar.propTypes = {
  calendarState: PropTypes.oneOf(Object.values(CalendarState)),
  className: PropTypes.string,
  classPrefix: PropTypes.string,
  disabledDate: PropTypes.func,
  disabledHours: PropTypes.func,
  disabledMinutes: PropTypes.func,
  disabledSeconds: PropTypes.func,
  format: PropTypes.string,
  hideHours: PropTypes.func,
  hideMinutes: PropTypes.func,
  hideSeconds: PropTypes.func,
  inSameMonth: PropTypes.func,
  isoWeek: PropTypes.bool,
  limitEndYear: PropTypes.number,
  locale: PropTypes.object,
  onChangePageDate: PropTypes.func,
  onChangePageTime: PropTypes.func,
  onMoveBackward: PropTypes.func,
  onMoveForward: PropTypes.func,
  onSelect: PropTypes.func,
  onToggleMeridian: PropTypes.func,
  onToggleMonthDropdown: PropTypes.func,
  onToggleTimeDropdown: PropTypes.func,
  calendarDate: PropTypes.instanceOf(Date),
  renderCell: PropTypes.func,
  renderTitle: PropTypes.func,
  renderToolbar: PropTypes.func,
  showMeridian: PropTypes.bool,
  showWeekNumbers: PropTypes.bool
};
export default Calendar;