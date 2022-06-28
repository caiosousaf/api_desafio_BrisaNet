"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.disabledTime = disabledTime;
exports.getMonthView = getMonthView;
exports.getDateMask = getDateMask;
exports.shouldOnlyTime = exports.shouldDate = exports.shouldMonth = exports.shouldTime = exports.omitHideDisabledProps = exports.calendarOnlyProps = exports.isValid = exports.isMatch = exports.subDays = exports.startOfWeek = exports.startOfMonth = exports.startOfISOWeek = exports.startOfDay = exports.setYear = exports.setSeconds = exports.setMonth = exports.setMinutes = exports.setHours = exports.setDate = exports.parseISO = exports.parse = exports.isSameSecond = exports.isSameMonth = exports.isSameDay = exports.isEqual = exports.isBefore = exports.isAfter = exports.getYear = exports.getSeconds = exports.getMonth = exports.getMinutes = exports.getHours = exports.getDaysInMonth = exports.getDay = exports.getDate = exports.format = exports.endOfWeek = exports.endOfMonth = exports.endOfISOWeek = exports.endOfDay = exports.compareAsc = exports.addMonths = exports.addDays = void 0;

var _pick = _interopRequireDefault(require("lodash/pick"));

var _omitBy = _interopRequireDefault(require("lodash/omitBy"));

var _getHours = _interopRequireDefault(require("date-fns/getHours"));

exports.getHours = _getHours.default;

var _getDay = _interopRequireDefault(require("date-fns/getDay"));

exports.getDay = _getDay.default;

var _getMinutes = _interopRequireDefault(require("date-fns/getMinutes"));

exports.getMinutes = _getMinutes.default;

var _getSeconds = _interopRequireDefault(require("date-fns/getSeconds"));

exports.getSeconds = _getSeconds.default;

var _addDays = _interopRequireDefault(require("date-fns/addDays"));

exports.addDays = _addDays.default;

var _addMonths = _interopRequireDefault(require("date-fns/addMonths"));

exports.addMonths = _addMonths.default;

var _compareAsc = _interopRequireDefault(require("date-fns/compareAsc"));

exports.compareAsc = _compareAsc.default;

var _endOfDay = _interopRequireDefault(require("date-fns/endOfDay"));

exports.endOfDay = _endOfDay.default;

var _endOfISOWeek = _interopRequireDefault(require("date-fns/endOfISOWeek"));

exports.endOfISOWeek = _endOfISOWeek.default;

var _endOfMonth = _interopRequireDefault(require("date-fns/endOfMonth"));

exports.endOfMonth = _endOfMonth.default;

var _endOfWeek = _interopRequireDefault(require("date-fns/endOfWeek"));

exports.endOfWeek = _endOfWeek.default;

var _format = _interopRequireDefault(require("date-fns/format"));

exports.format = _format.default;

var _getDate = _interopRequireDefault(require("date-fns/getDate"));

exports.getDate = _getDate.default;

var _getDaysInMonth = _interopRequireDefault(require("date-fns/getDaysInMonth"));

exports.getDaysInMonth = _getDaysInMonth.default;

var _getMonth = _interopRequireDefault(require("date-fns/getMonth"));

exports.getMonth = _getMonth.default;

var _getYear = _interopRequireDefault(require("date-fns/getYear"));

exports.getYear = _getYear.default;

var _isAfter = _interopRequireDefault(require("date-fns/isAfter"));

exports.isAfter = _isAfter.default;

var _isBefore = _interopRequireDefault(require("date-fns/isBefore"));

exports.isBefore = _isBefore.default;

var _isEqual = _interopRequireDefault(require("date-fns/isEqual"));

exports.isEqual = _isEqual.default;

var _isSameDay = _interopRequireDefault(require("date-fns/isSameDay"));

exports.isSameDay = _isSameDay.default;

var _isSameMonth = _interopRequireDefault(require("date-fns/isSameMonth"));

exports.isSameMonth = _isSameMonth.default;

var _isSameSecond = _interopRequireDefault(require("date-fns/isSameSecond"));

exports.isSameSecond = _isSameSecond.default;

var _parse = _interopRequireDefault(require("date-fns/parse"));

exports.parse = _parse.default;

var _parseISO = _interopRequireDefault(require("date-fns/parseISO"));

exports.parseISO = _parseISO.default;

var _setDate = _interopRequireDefault(require("date-fns/setDate"));

exports.setDate = _setDate.default;

var _setHours = _interopRequireDefault(require("date-fns/setHours"));

exports.setHours = _setHours.default;

var _setMinutes = _interopRequireDefault(require("date-fns/setMinutes"));

exports.setMinutes = _setMinutes.default;

var _setMonth = _interopRequireDefault(require("date-fns/setMonth"));

exports.setMonth = _setMonth.default;

var _setSeconds = _interopRequireDefault(require("date-fns/setSeconds"));

exports.setSeconds = _setSeconds.default;

var _setYear = _interopRequireDefault(require("date-fns/setYear"));

exports.setYear = _setYear.default;

var _startOfDay = _interopRequireDefault(require("date-fns/startOfDay"));

exports.startOfDay = _startOfDay.default;

var _startOfISOWeek = _interopRequireDefault(require("date-fns/startOfISOWeek"));

exports.startOfISOWeek = _startOfISOWeek.default;

var _startOfMonth = _interopRequireDefault(require("date-fns/startOfMonth"));

exports.startOfMonth = _startOfMonth.default;

var _startOfWeek = _interopRequireDefault(require("date-fns/startOfWeek"));

exports.startOfWeek = _startOfWeek.default;

var _subDays = _interopRequireDefault(require("date-fns/subDays"));

exports.subDays = _subDays.default;

var _isMatch = _interopRequireDefault(require("date-fns/isMatch"));

exports.isMatch = _isMatch.default;

var _isValid = _interopRequireDefault(require("date-fns/isValid"));

exports.isValid = _isValid.default;
var disabledTimeProps = ['disabledHours', 'disabledMinutes', 'disabledSeconds'];
var hideTimeProps = ['hideHours', 'hideMinutes', 'hideSeconds'];
var calendarOnlyProps = disabledTimeProps.concat(hideTimeProps);
exports.calendarOnlyProps = calendarOnlyProps;

function validTime(calendarProps, date) {
  if (!date) {
    return false;
  }

  return Object.keys(calendarProps).some(function (key) {
    if (/(Hours)/.test(key)) {
      return calendarProps[key]((0, _getHours.default)(date), date);
    }

    if (/(Minutes)/.test(key)) {
      return calendarProps[key]((0, _getMinutes.default)(date), date);
    }

    if (/(Seconds)/.test(key)) {
      return calendarProps[key]((0, _getSeconds.default)(date), date);
    }

    return false;
  });
}
/**
 * Verify that the time is valid.
 * @param props
 * @param date
 */


function disabledTime(props, date) {
  var calendarProps = (0, _pick.default)(props, disabledTimeProps);
  return validTime(calendarProps, date);
}

var omitHideDisabledProps = function omitHideDisabledProps(props) {
  return (0, _omitBy.default)(props, function (_val, key) {
    return key.startsWith('disabled') || key.startsWith('hide');
  });
};

exports.omitHideDisabledProps = omitHideDisabledProps;

var shouldTime = function shouldTime(format) {
  return /([Hhms])/.test(format);
};

exports.shouldTime = shouldTime;

var shouldMonth = function shouldMonth(format) {
  return /[Yy]/.test(format) && /[ML]/.test(format);
};

exports.shouldMonth = shouldMonth;

var shouldDate = function shouldDate(format) {
  return /[Yy]/.test(format) && /[ML]/.test(format) && /[Dd]/.test(format);
}; // for date-fns v1 and v2


exports.shouldDate = shouldDate;

var shouldOnlyTime = function shouldOnlyTime(format) {
  return /([Hhms])/.test(format) && !/([YyMDd])/.test(format);
}; // for date-fns v1 and v2

/**
 * Get all weeks of this month
 * @params monthDate
 * @return date[]
 */


exports.shouldOnlyTime = shouldOnlyTime;

function getMonthView(monthDate, isoWeek) {
  var firstDayOfMonth = (0, _getDay.default)(monthDate);
  var distance = 0 - firstDayOfMonth;

  if (isoWeek) {
    distance = 1 - firstDayOfMonth;

    if (firstDayOfMonth === 0) {
      distance = -6;
    }
  }

  var firstWeekendDate = (0, _addDays.default)(monthDate, distance);
  var weeks = [firstWeekendDate];
  var nextWeekendDate = (0, _addDays.default)(firstWeekendDate, 7);
  weeks.push(nextWeekendDate);

  while (weeks.length < 6) {
    nextWeekendDate = (0, _addDays.default)(nextWeekendDate, 7);
    weeks.push(nextWeekendDate);
  }

  return weeks;
}

function getDateMask(formatStr) {
  return Array.from(formatStr).map(function (i) {
    return i.match(/[A-Za-z]/) ? /[\d|A-Za-z]/ : i;
  });
}