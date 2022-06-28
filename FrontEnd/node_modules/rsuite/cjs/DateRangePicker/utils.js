"use strict";

exports.__esModule = true;
exports.getCalendarDate = getCalendarDate;
exports.getWeekHoverRange = exports.getMonthHoverRange = exports.isSameRange = exports.getDefaultRanges = exports.setTimingMargin = void 0;

var _utils = require("../utils");

var setTimingMargin = function setTimingMargin(date, way) {
  if (way === void 0) {
    way = 'left';
  }

  return way === 'right' ? _utils.DateUtils.endOfDay(date) : _utils.DateUtils.startOfDay(date);
};

exports.setTimingMargin = setTimingMargin;

function getCalendarDate(_ref) {
  var _value;

  var value = _ref.value;
  // Update calendarDate if the value is not null
  value = (_value = value) !== null && _value !== void 0 ? _value : [];

  if (value[0] && value[1]) {
    var sameMonth = _utils.DateUtils.isSameMonth(value[0], value[1]);

    return [value[0], sameMonth ? _utils.DateUtils.addMonths(value[1], 1) : value[1]]; // If only the start date
  } else if (value[0]) {
    return [value[0], _utils.DateUtils.addMonths(value[0], 1)];
  }

  var todayDate = new Date();
  return [todayDate, _utils.DateUtils.addMonths(todayDate, 1)];
}

var getDefaultRanges = function getDefaultRanges() {
  var todayDate = new Date();
  return [{
    label: 'today',
    value: [setTimingMargin(todayDate), setTimingMargin(todayDate, 'right')]
  }, {
    label: 'yesterday',
    value: [setTimingMargin(_utils.DateUtils.addDays(todayDate, -1)), setTimingMargin(_utils.DateUtils.addDays(todayDate, -1), 'right')]
  }, {
    label: 'last7Days',
    value: [setTimingMargin(_utils.DateUtils.subDays(todayDate, 6)), setTimingMargin(todayDate, 'right')]
  }];
};

exports.getDefaultRanges = getDefaultRanges;

var isSameRange = function isSameRange(source, dest, format) {
  // If both are null, reguard as same
  if (null === source && null === dest) return true; // If only one is null, regard as different

  if (null === source || null === dest) return false;

  var result = _utils.DateUtils.isSameDay(source[0], dest[0]) && _utils.DateUtils.isSameDay(source[1], dest[1]);

  if (_utils.DateUtils.shouldTime(format)) {
    result && (result = _utils.DateUtils.isSameSecond(source[0], dest[0]) && _utils.DateUtils.isSameSecond(source[1], dest[1]));
  }

  return result;
};

exports.isSameRange = isSameRange;

var getMonthHoverRange = function getMonthHoverRange(date) {
  return [_utils.DateUtils.startOfMonth(date), _utils.DateUtils.endOfMonth(date)];
};

exports.getMonthHoverRange = getMonthHoverRange;

var getWeekHoverRange = function getWeekHoverRange(isoWeek, date) {
  if (isoWeek) {
    // set to the first day of this week according to ISO 8601, 12:00 am
    return [_utils.DateUtils.startOfISOWeek(date), _utils.DateUtils.endOfISOWeek(date)];
  }

  return [_utils.DateUtils.startOfWeek(date), _utils.DateUtils.endOfWeek(date)];
};

exports.getWeekHoverRange = getWeekHoverRange;