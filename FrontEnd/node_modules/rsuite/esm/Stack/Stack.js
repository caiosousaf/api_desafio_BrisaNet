import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import PropTypes from 'prop-types';
import { useClassNames, useCustom, isIE } from '../utils';
var Stack = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var _itemStyles;

  var _props$as = props.as,
      Component = _props$as === void 0 ? 'div' : _props$as,
      _props$alignItems = props.alignItems,
      alignItems = _props$alignItems === void 0 ? 'center' : _props$alignItems,
      _props$classPrefix = props.classPrefix,
      classPrefix = _props$classPrefix === void 0 ? 'stack' : _props$classPrefix,
      className = props.className,
      children = props.children,
      direction = props.direction,
      justifyContent = props.justifyContent,
      spacing = props.spacing,
      divider = props.divider,
      style = props.style,
      wrap = props.wrap,
      rest = _objectWithoutPropertiesLoose(props, ["as", "alignItems", "classPrefix", "className", "children", "direction", "justifyContent", "spacing", "divider", "style", "wrap"]);

  var _useCustom = useCustom('Stack'),
      rtl = _useCustom.rtl;

  var _useClassNames = useClassNames(classPrefix),
      withClassPrefix = _useClassNames.withClassPrefix,
      merge = _useClassNames.merge,
      prefix = _useClassNames.prefix;

  var classes = merge(className, withClassPrefix());
  var isSupportGridGap = !isIE();
  var count = React.Children.count(children);
  var gridGap = Array.isArray(spacing) ? spacing : [spacing, 0];
  var itemStyles = (_itemStyles = {}, _itemStyles[rtl ? 'marginLeft' : 'marginRight'] = gridGap[0], _itemStyles.marginBottom = gridGap[1], _itemStyles);

  var styles = _extends({
    alignItems: alignItems,
    justifyContent: justifyContent,
    flexDirection: direction,
    flexWrap: wrap ? 'wrap' : undefined,
    gap: isSupportGridGap ? spacing : undefined
  }, style);

  return /*#__PURE__*/React.createElement(Component, _extends({}, rest, {
    ref: ref,
    className: classes,
    style: styles
  }), React.Children.map(children, function (child, index) {
    var childNode = /*#__PURE__*/React.createElement("div", {
      className: prefix('item'),
      style: !isSupportGridGap ? itemStyles : undefined
    }, child);
    return [childNode, index < count - 1 ? divider : null];
  }));
});
Stack.displayName = 'Stack';
Stack.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  classPrefix: PropTypes.string,
  direction: PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  alignItems: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline']),
  justifyContent: PropTypes.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around']),
  spacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string, PropTypes.array]),
  divider: PropTypes.node,
  wrap: PropTypes.bool
};
export default Stack;