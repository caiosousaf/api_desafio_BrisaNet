import { DateUtils } from '../utils';
export var setTimingMargin = function setTimingMargin(date, way) {
  if (way === void 0) {
    way = 'left';
  }

  return way === 'right' ? DateUtils.endOfDay(date) : DateUtils.startOfDay(date);
};
export function getCalendarDate(_ref) {
  var _value;

  var value = _ref.value;
  // Update calendarDate if the value is not null
  value = (_value = value) !== null && _value !== void 0 ? _value : [];

  if (value[0] && value[1]) {
    var sameMonth = DateUtils.isSameMonth(value[0], value[1]);
    return [value[0], sameMonth ? DateUtils.addMonths(value[1], 1) : value[1]]; // If only the start date
  } else if (value[0]) {
    return [value[0], DateUtils.addMonths(value[0], 1)];
  }

  var todayDate = new Date();
  return [todayDate, DateUtils.addMonths(todayDate, 1)];
}
export var getDefaultRanges = function getDefaultRanges() {
  var todayDate = new Date();
  return [{
    label: 'today',
    value: [setTimingMargin(todayDate), setTimingMargin(todayDate, 'right')]
  }, {
    label: 'yesterday',
    value: [setTimingMargin(DateUtils.addDays(todayDate, -1)), setTimingMargin(DateUtils.addDays(todayDate, -1), 'right')]
  }, {
    label: 'last7Days',
    value: [setTimingMargin(DateUtils.subDays(todayDate, 6)), setTimingMargin(todayDate, 'right')]
  }];
};
export var isSameRange = function isSameRange(source, dest, format) {
  // If both are null, reguard as same
  if (null === source && null === dest) return true; // If only one is null, regard as different

  if (null === source || null === dest) return false;
  var result = DateUtils.isSameDay(source[0], dest[0]) && DateUtils.isSameDay(source[1], dest[1]);

  if (DateUtils.shouldTime(format)) {
    result && (result = DateUtils.isSameSecond(source[0], dest[0]) && DateUtils.isSameSecond(source[1], dest[1]));
  }

  return result;
};
export var getMonthHoverRange = function getMonthHoverRange(date) {
  return [DateUtils.startOfMonth(date), DateUtils.endOfMonth(date)];
};
export var getWeekHoverRange = function getWeekHoverRange(isoWeek, date) {
  if (isoWeek) {
    // set to the first day of this week according to ISO 8601, 12:00 am
    return [DateUtils.startOfISOWeek(date), DateUtils.endOfISOWeek(date)];
  }

  return [DateUtils.startOfWeek(date), DateUtils.endOfWeek(date)];
};