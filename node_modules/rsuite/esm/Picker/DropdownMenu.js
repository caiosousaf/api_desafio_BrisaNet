import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";

var _this = this;

import React, { useRef, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import isUndefined from 'lodash/isUndefined';
import isString from 'lodash/isString';
import isNumber from 'lodash/isNumber';
import findIndex from 'lodash/findIndex';
import getPosition from 'dom-lib/getPosition';
import scrollTop from 'dom-lib/scrollTop';
import getHeight from 'dom-lib/getHeight';
import classNames from 'classnames';
import { List, AutoSizer } from './VirtualizedList';
import shallowEqual from '../utils/shallowEqual';
import { mergeRefs, useClassNames } from '../utils';
import DropdownMenuGroup from './DropdownMenuGroup';
import { KEY_GROUP, KEY_GROUP_TITLE } from '../utils/getDataGroupBy';
var DropdownMenu = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _props$data = props.data,
      data = _props$data === void 0 ? [] : _props$data,
      group = props.group,
      _props$maxHeight = props.maxHeight,
      maxHeight = _props$maxHeight === void 0 ? 320 : _props$maxHeight,
      _props$activeItemValu = props.activeItemValues,
      activeItemValues = _props$activeItemValu === void 0 ? [] : _props$activeItemValu,
      _props$disabledItemVa = props.disabledItemValues,
      disabledItemValues = _props$disabledItemVa === void 0 ? [] : _props$disabledItemVa,
      _props$classPrefix = props.classPrefix,
      classPrefix = _props$classPrefix === void 0 ? 'dropdown-menu' : _props$classPrefix,
      _props$valueKey = props.valueKey,
      valueKey = _props$valueKey === void 0 ? 'value' : _props$valueKey,
      _props$labelKey = props.labelKey,
      labelKey = _props$labelKey === void 0 ? 'label' : _props$labelKey,
      virtualized = props.virtualized,
      listProps = props.listProps,
      className = props.className,
      style = props.style,
      focusItemValue = props.focusItemValue,
      dropdownMenuItemClassPrefix = props.dropdownMenuItemClassPrefix,
      DropdownMenuItem = props.dropdownMenuItemAs,
      _props$rowHeight = props.rowHeight,
      rowHeight = _props$rowHeight === void 0 ? 36 : _props$rowHeight,
      _props$rowGroupHeight = props.rowGroupHeight,
      rowGroupHeight = _props$rowGroupHeight === void 0 ? 48 : _props$rowGroupHeight,
      renderMenuGroup = props.renderMenuGroup,
      renderMenuItem = props.renderMenuItem,
      onGroupTitleClick = props.onGroupTitleClick,
      onSelect = props.onSelect,
      rest = _objectWithoutPropertiesLoose(props, ["data", "group", "maxHeight", "activeItemValues", "disabledItemValues", "classPrefix", "valueKey", "labelKey", "virtualized", "listProps", "className", "style", "focusItemValue", "dropdownMenuItemClassPrefix", "dropdownMenuItemAs", "rowHeight", "rowGroupHeight", "renderMenuGroup", "renderMenuItem", "onGroupTitleClick", "onSelect"]);

  var _useClassNames = useClassNames(classPrefix),
      withClassPrefix = _useClassNames.withClassPrefix,
      prefix = _useClassNames.prefix,
      merge = _useClassNames.merge;

  var classes = merge(className, withClassPrefix('items', {
    grouped: group
  }));

  var styles = _extends({}, style, {
    maxHeight: maxHeight
  });

  var menuBodyContainerRef = useRef(null);

  var _useState = useState([]),
      foldedGroupKeys = _useState[0],
      setFoldedGroupKeys = _useState[1];

  var handleGroupTitleClick = useCallback(function (key, event) {
    var nextGroupKeys = foldedGroupKeys.filter(function (item) {
      return item !== key;
    });

    if (nextGroupKeys.length === foldedGroupKeys.length) {
      nextGroupKeys.push(key);
    }

    setFoldedGroupKeys(nextGroupKeys);
    onGroupTitleClick === null || onGroupTitleClick === void 0 ? void 0 : onGroupTitleClick(event);
  }, [onGroupTitleClick, foldedGroupKeys]);
  var handleSelect = useCallback(function (item, value, event, checked) {
    onSelect === null || onSelect === void 0 ? void 0 : onSelect(value, item, event, checked);
  }, [onSelect]);

  var getRowHeight = function getRowHeight(list, _ref) {
    var index = _ref.index;
    var item = list[index];

    if (group && item[KEY_GROUP] && index !== 0) {
      return rowGroupHeight;
    }

    return rowHeight;
  };

  useEffect(function () {
    var container = menuBodyContainerRef.current;

    if (!container) {
      return;
    }

    var activeItem = container.querySelector("." + prefix('item-focus'));

    if (!activeItem) {
      activeItem = container.querySelector("." + prefix('item-active'));
    }

    if (!activeItem) {
      return;
    }

    var position = getPosition(activeItem, container);
    var sTop = scrollTop(container);
    var sHeight = getHeight(container);

    if (sTop > position.top) {
      scrollTop(container, Math.max(0, position.top - 20));
    } else if (position.top > sTop + sHeight) {
      scrollTop(container, Math.max(0, position.top - sHeight + 32));
    }
  }, [focusItemValue, menuBodyContainerRef, prefix]);

  var renderItem = function renderItem(list, _ref2) {
    var index = _ref2.index,
        style = _ref2.style;
    var item = list[index];
    var value = item[valueKey];
    var label = item[labelKey];

    if (isUndefined(label) && !item[KEY_GROUP]) {
      throw Error("labelKey \"" + labelKey + "\" is not defined in \"data\" : " + index);
    } // Use `value` in keys when If `value` is string or number


    var itemKey = isString(value) || isNumber(value) ? value : index;
    /**
     * Render <DropdownMenuGroup>
     * when if `group` is enabled
     */

    if (group && item[KEY_GROUP]) {
      var groupValue = item[KEY_GROUP_TITLE]; // TODO: grouped options should be owned by group

      return /*#__PURE__*/React.createElement(DropdownMenuGroup, {
        style: style,
        classPrefix: 'picker-menu-group',
        className: classNames({
          folded: foldedGroupKeys.some(function (key) {
            return key === groupValue;
          })
        }),
        key: "group-" + groupValue,
        onClick: handleGroupTitleClick.bind(null, groupValue)
      }, renderMenuGroup ? renderMenuGroup(groupValue, item) : groupValue);
    } else if (isUndefined(value) && !isUndefined(item[KEY_GROUP])) {
      throw Error("valueKey \"" + valueKey + "\" is not defined in \"data\" : " + index + " ");
    }

    var disabled = disabledItemValues === null || disabledItemValues === void 0 ? void 0 : disabledItemValues.some(function (disabledValue) {
      return shallowEqual(disabledValue, value);
    });
    var active = activeItemValues === null || activeItemValues === void 0 ? void 0 : activeItemValues.some(function (v) {
      return shallowEqual(v, value);
    });
    var focus = !isUndefined(focusItemValue) && shallowEqual(focusItemValue, value);
    return /*#__PURE__*/React.createElement(DropdownMenuItem, {
      style: style,
      key: itemKey,
      disabled: disabled,
      active: active,
      focus: focus,
      value: value,
      classPrefix: dropdownMenuItemClassPrefix,
      onSelect: handleSelect.bind(null, item)
    }, renderMenuItem ? renderMenuItem(label, item) : label);
  };

  var filteredItems = group ? data.filter(function (item) {
    return !(foldedGroupKeys !== null && foldedGroupKeys !== void 0 && foldedGroupKeys.some(function (key) {
      var _item$parent;

      return key === ((_item$parent = item.parent) === null || _item$parent === void 0 ? void 0 : _item$parent[KEY_GROUP_TITLE]);
    }));
  }) : data;
  var rowCount = filteredItems.length; // Check whether the height of the data exceeds the height of the container.

  var useVirtualized = virtualized && rowCount * rowHeight > maxHeight;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: !useVirtualized ? 'listbox' : undefined
  }, rest, {
    className: classes,
    ref: mergeRefs(menuBodyContainerRef, ref),
    style: styles
  }), useVirtualized ? /*#__PURE__*/React.createElement(AutoSizer, {
    defaultHeight: maxHeight,
    style: {
      width: 'auto',
      height: 'auto'
    }
  }, function (_ref3) {
    var height = _ref3.height,
        width = _ref3.width;
    return /*#__PURE__*/React.createElement(List, _extends({
      role: "listbox",
      containerRole: '',
      "aria-readonly": undefined,
      width: width,
      height: height || maxHeight,
      scrollToIndex: findIndex(data, function (item) {
        return item[valueKey] === (activeItemValues === null || activeItemValues === void 0 ? void 0 : activeItemValues[0]);
      }),
      rowCount: rowCount,
      rowHeight: getRowHeight.bind(_this, filteredItems),
      rowRenderer: renderItem.bind(null, filteredItems)
    }, listProps));
  }) : filteredItems.map(function (_item, index) {
    return renderItem(filteredItems, {
      index: index
    });
  }));
});
export var dropdownMenuPropTypes = {
  classPrefix: PropTypes.string.isRequired,
  className: PropTypes.string,
  dropdownMenuItemAs: PropTypes.elementType.isRequired,
  dropdownMenuItemClassPrefix: PropTypes.string,
  data: PropTypes.array,
  group: PropTypes.bool,
  disabledItemValues: PropTypes.array,
  activeItemValues: PropTypes.array,
  focusItemValue: PropTypes.any,
  maxHeight: PropTypes.number,
  valueKey: PropTypes.string,
  labelKey: PropTypes.string,
  style: PropTypes.object,
  renderMenuItem: PropTypes.func,
  renderMenuGroup: PropTypes.func,
  onSelect: PropTypes.func,
  onGroupTitleClick: PropTypes.func,
  virtualized: PropTypes.bool,
  listProps: PropTypes.any,
  rowHeight: PropTypes.number,
  rowGroupHeight: PropTypes.number
};
DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.propTypes = dropdownMenuPropTypes;
export default DropdownMenu;