import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { AutoSizer, List } from '../Picker/VirtualizedList';
import { DateUtils, useClassNames } from '../utils';
import MonthDropdownItem from './MonthDropdownItem';
import { useCalendarContext } from './CalendarContext';
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

var MonthDropdown = /*#__PURE__*/React.forwardRef(function (props, ref) {
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
      rest = _objectWithoutPropertiesLoose(props, ["as", "className", "classPrefix", "limitEndYear", "show", "height", "width", "disabledMonth"]);

  var _useCalendarContext = useCalendarContext(),
      _useCalendarContext$d = _useCalendarContext.date,
      date = _useCalendarContext$d === void 0 ? new Date() : _useCalendarContext$d;

  var _useClassNames = useClassNames(classPrefix),
      prefix = _useClassNames.prefix,
      merge = _useClassNames.merge,
      withClassPrefix = _useClassNames.withClassPrefix;

  var getRowCount = useCallback(function () {
    return DateUtils.getYear(new Date()) + limitEndYear;
  }, [limitEndYear]);
  var isMonthDisabled = useCallback(function (year, month) {
    if (disabledMonth) {
      var days = DateUtils.getDaysInMonth(new Date(year, month)); // If all dates in a month are disabled, disable the current month

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
    var selectedMonth = DateUtils.getMonth(date);
    var selectedYear = DateUtils.getYear(date);
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
    return /*#__PURE__*/React.createElement("div", {
      className: rowClassName,
      role: "row",
      key: key,
      style: style
    }, /*#__PURE__*/React.createElement("div", {
      className: titleClassName,
      role: "rowheader"
    }, year), /*#__PURE__*/React.createElement("div", {
      className: prefix('list'),
      role: "gridcell"
    }, monthMap.map(function (item, month) {
      return /*#__PURE__*/React.createElement(MonthDropdownItem, {
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
  return /*#__PURE__*/React.createElement(Component, _extends({
    role: "menu"
  }, rest, {
    ref: ref,
    className: classes
  }), /*#__PURE__*/React.createElement("div", {
    className: prefix('content')
  }, /*#__PURE__*/React.createElement("div", {
    className: prefix('scroll')
  }, show && /*#__PURE__*/React.createElement(AutoSizer, {
    defaultHeight: defaultHeight,
    defaultWidth: defaultWidth
  }, function (_ref3) {
    var height = _ref3.height,
        width = _ref3.width;
    return /*#__PURE__*/React.createElement(List, {
      className: prefix('row-wrapper'),
      width: width || defaultWidth,
      height: height || defaultHeight,
      rowHeight: getRowHeight(count),
      rowCount: count,
      scrollToIndex: DateUtils.getYear(date),
      rowRenderer: rowRenderer
    });
  }))));
});
MonthDropdown.displayName = 'MonthDropdown';
MonthDropdown.propTypes = {
  limitEndYear: PropTypes.number,
  className: PropTypes.string,
  classPrefix: PropTypes.string,
  show: PropTypes.bool,
  disabledMonth: PropTypes.func
};
export default MonthDropdown;