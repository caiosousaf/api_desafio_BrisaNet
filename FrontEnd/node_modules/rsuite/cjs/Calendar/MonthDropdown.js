"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _VirtualizedList = require("../Picker/VirtualizedList");

var _utils = require("../utils");

var _MonthDropdownItem = _interopRequireDefault(require("./MonthDropdownItem"));

var _CalendarContext = require("./CalendarContext");

var monthMap = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
/**
 * Set the row height.
 * Add 1px to the first and last lines.
 */

function getRowHeight(count) {
  return function (_ref) {
    var index = _ref.index;

    if (index === 0 || count - 1 === index) {
      return 75 + 1;
    }

    return 75;
  };
}

var MonthDropdown = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _props$as = props.as,
      Component = _props$as === void 0 ? 'div' : _props$as,
      className = props.className,
      _props$classPrefix = props.classPrefix,
      classPrefix = _props$classPrefix === void 0 ? 'calendar-month-dropdown' : _props$classPrefix,
      _props$limitEndYear = props.limitEndYear,
      limitEndYear = _props$limitEndYear === void 0 ? 5 : _props$limitEndYear,
      show = props.show,
      _props$height = props.height,
      defaultHeight = _props$height === void 0 ? 221 : _props$height,
      _props$width = props.width,
      defaultWidth = _props$width === void 0 ? 256 : _props$width,
      disabledMonth = props.disabledMonth,
      rest = (0, _objectWithoutPropertiesLoose2.default)(props, ["as", "className", "classPrefix", "limitEndYear", "show", "height", "width", "disabledMonth"]);

  var _useCalendarContext = (0, _CalendarContext.useCalendarContext)(),
      _useCalendarContext$d = _useCalendarContext.date,
      date = _useCalendarContext$d === void 0 ? new Date() : _useCalendarContext$d;

  var _useClassNames = (0, _utils.useClassNames)(classPrefix),
      prefix = _useClassNames.prefix,
      merge = _useClassNames.merge,
      withClassPrefix = _useClassNames.withClassPrefix;

  var getRowCount = (0, _react.useCallback)(function () {
    return _utils.DateUtils.getYear(new Date()) + limitEndYear;
  }, [limitEndYear]);
  var isMonthDisabled = (0, _react.useCallback)(function (year, month) {
    if (disabledMonth) {
      var days = _utils.DateUtils.getDaysInMonth(new Date(year, month)); // If all dates in a month are disabled, disable the current month


      for (var i = 1; i <= days; i++) {
        if (!disabledMonth(new Date(year, month, i))) {
          return false;
        }
      }

      return true;
    }

    return false;
  }, [disabledMonth]);

  var rowRenderer = function rowRenderer(_ref2) {
    var index = _ref2.index,
        key = _ref2.key,
        style = _ref2.style;

    var selectedMonth = _utils.DateUtils.getMonth(date);

    var selectedYear = _utils.DateUtils.getYear(date);

    var year = index + 1;
    var isSelectedYear = year === selectedYear;
    var count = getRowCount();
    var titleClassName = prefix('year', {
      'year-active': isSelectedYear
    });
    var rowClassName = merge(prefix('row'), {
      'first-row': index === 0,
      'last-row': index === count - 1
    });
    return /*#__PURE__*/_react.default.createElement("div", {
      className: rowClassName,
      role: "row",
      key: key,
      style: style
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: titleClassName,
      role: "rowheader"
    }, year), /*#__PURE__*/_react.default.createElement("div", {
      className: prefix('list'),
      role: "gridcell"
    }, monthMap.map(function (item, month) {
      return /*#__PURE__*/_react.default.createElement(_MonthDropdownItem.default, {
        disabled: isMonthDisabled(year, month),
        active: isSelectedYear && month === selectedMonth,
        key: month + "_" + item,
        month: month + 1,
        year: year
      });
    })));
  };

  var count = getRowCount();
  var classes = merge(className, withClassPrefix(), {
    show: show
  });
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    role: "menu"
  }, rest, {
    ref: ref,
    className: classes
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: prefix('content')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: prefix('scroll')
  }, show && /*#__PURE__*/_react.default.createElement(_VirtualizedList.AutoSizer, {
    defaultHeight: defaultHeight,
    defaultWidth: defaultWidth
  }, function (_ref3) {
    var height = _ref3.height,
        width = _ref3.width;
    return /*#__PURE__*/_react.default.createElement(_VirtualizedList.List, {
      className: prefix('row-wrapper'),
      width: width || defaultWidth,
      height: height || defaultHeight,
      rowHeight: getRowHeight(count),
      rowCount: count,
      scrollToIndex: _utils.DateUtils.getYear(date),
      rowRenderer: rowRenderer
    });
  }))));
});

MonthDropdown.displayName = 'MonthDropdown';
MonthDropdown.propTypes = {
  limitEndYear: _propTypes.default.number,
  className: _propTypes.default.string,
  classPrefix: _propTypes.default.string,
  show: _propTypes.default.bool,
  disabledMonth: _propTypes.default.func
};
var _default = MonthDropdown;
exports.default = _default;