"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = exports.CalendarState = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _pick = _interopRequireDefault(require("lodash/pick"));

var _MonthDropdown = _interopRequireDefault(require("./MonthDropdown"));

var _TimeDropdown = _interopRequireDefault(require("./TimeDropdown"));

var _View = _interopRequireDefault(require("./View"));

var _Header = _interopRequireDefault(require("./Header"));

var _utils = require("../utils");

var _CalendarContext = require("./CalendarContext");

var CalendarState;
exports.CalendarState = CalendarState;

(function (CalendarState) {
  CalendarState["DROP_TIME"] = "DROP_TIME";
  CalendarState["DROP_MONTH"] = "DROP_MONTH";
})(CalendarState || (exports.CalendarState = CalendarState = {}));

var Calendar = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
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
      rest = (0, _objectWithoutPropertiesLoose2.default)(props, ["as", "className", "classPrefix", "calendarState", "dateRange", "disabledBackward", "disabledDate", "disabledForward", "format", "hoverRangeValue", "inSameMonth", "isoWeek", "limitEndYear", "locale", "onChangePageDate", "onChangePageTime", "onMouseMove", "onMoveBackward", "onMoveForward", "onSelect", "onToggleMeridian", "onToggleMonthDropdown", "onToggleTimeDropdown", "calendarDate", "renderCell", "renderTitle", "renderToolbar", "showMeridian", "showWeekNumbers", "inline"]);

  var _useClassNames = (0, _utils.useClassNames)(classPrefix),
      withClassPrefix = _useClassNames.withClassPrefix,
      merge = _useClassNames.merge;

  var isDisabledDate = (0, _react.useCallback)(function (date) {
    var _disabledDate;

    return (_disabledDate = disabledDate === null || disabledDate === void 0 ? void 0 : disabledDate(date)) !== null && _disabledDate !== void 0 ? _disabledDate : false;
  }, [disabledDate]);

  var isTimeDisabled = function isTimeDisabled(date) {
    return _utils.DateUtils.disabledTime(props, date);
  };

  var handleMoveForward = (0, _react.useCallback)(function () {
    onMoveForward === null || onMoveForward === void 0 ? void 0 : onMoveForward(_utils.DateUtils.addMonths(calendarDate, 1));
  }, [onMoveForward, calendarDate]);
  var handleMoveBackward = (0, _react.useCallback)(function () {
    onMoveBackward === null || onMoveBackward === void 0 ? void 0 : onMoveBackward(_utils.DateUtils.addMonths(calendarDate, -1));
  }, [onMoveBackward, calendarDate]);

  var showDate = _utils.DateUtils.shouldDate(format);

  var showTime = _utils.DateUtils.shouldTime(format);

  var showMonth = _utils.DateUtils.shouldMonth(format);

  var onlyShowTime = showTime && !showDate && !showMonth;
  var onlyShowMonth = showMonth && !showDate && !showTime;
  var dropTime = calendarState === CalendarState.DROP_TIME || onlyShowTime;
  var dropMonth = calendarState === CalendarState.DROP_MONTH || onlyShowMonth;
  var inSameThisMonthDate = (0, _react.useCallback)(function (date) {
    return (0, _utils.composeFunctions)(function (d) {
      return _utils.DateUtils.setDate(d, 1);
    }, function (d) {
      return _utils.DateUtils.isSameMonth(d, date);
    })(date);
  }, []);
  var calendarClasses = merge(className, withClassPrefix({
    'show-time-dropdown': dropTime,
    'show-month-dropdown': dropMonth,
    'show-week-numbers': showWeekNumbers
  }));
  var timeDropdownProps = (0, _pick.default)(rest, _utils.DateUtils.calendarOnlyProps);
  var contextValue = (0, _react.useMemo)(function () {
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
  return /*#__PURE__*/_react.default.createElement(_CalendarContext.CalendarProvider, {
    value: contextValue
  }, /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, _utils.DateUtils.omitHideDisabledProps(rest), {
    className: calendarClasses,
    ref: ref
  }), /*#__PURE__*/_react.default.createElement(_Header.default, {
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
  }), showDate && /*#__PURE__*/_react.default.createElement(_View.default, null), showMonth && /*#__PURE__*/_react.default.createElement(_MonthDropdown.default, {
    show: dropMonth,
    limitEndYear: limitEndYear,
    disabledMonth: isDisabledDate
  }), showTime && /*#__PURE__*/_react.default.createElement(_TimeDropdown.default, (0, _extends2.default)({}, timeDropdownProps, {
    show: dropTime,
    showMeridian: showMeridian
  }))));
});

Calendar.displayName = 'Calendar';
Calendar.propTypes = {
  calendarState: _propTypes.default.oneOf(Object.values(CalendarState)),
  className: _propTypes.default.string,
  classPrefix: _propTypes.default.string,
  disabledDate: _propTypes.default.func,
  disabledHours: _propTypes.default.func,
  disabledMinutes: _propTypes.default.func,
  disabledSeconds: _propTypes.default.func,
  format: _propTypes.default.string,
  hideHours: _propTypes.default.func,
  hideMinutes: _propTypes.default.func,
  hideSeconds: _propTypes.default.func,
  inSameMonth: _propTypes.default.func,
  isoWeek: _propTypes.default.bool,
  limitEndYear: _propTypes.default.number,
  locale: _propTypes.default.object,
  onChangePageDate: _propTypes.default.func,
  onChangePageTime: _propTypes.default.func,
  onMoveBackward: _propTypes.default.func,
  onMoveForward: _propTypes.default.func,
  onSelect: _propTypes.default.func,
  onToggleMeridian: _propTypes.default.func,
  onToggleMonthDropdown: _propTypes.default.func,
  onToggleTimeDropdown: _propTypes.default.func,
  calendarDate: _propTypes.default.instanceOf(Date),
  renderCell: _propTypes.default.func,
  renderTitle: _propTypes.default.func,
  renderToolbar: _propTypes.default.func,
  showMeridian: _propTypes.default.bool,
  showWeekNumbers: _propTypes.default.bool
};
var _default = Calendar;
exports.default = _default;