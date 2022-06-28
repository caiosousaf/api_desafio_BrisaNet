"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../utils");

var Stack = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
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
      rest = (0, _objectWithoutPropertiesLoose2.default)(props, ["as", "alignItems", "classPrefix", "className", "children", "direction", "justifyContent", "spacing", "divider", "style", "wrap"]);

  var _useCustom = (0, _utils.useCustom)('Stack'),
      rtl = _useCustom.rtl;

  var _useClassNames = (0, _utils.useClassNames)(classPrefix),
      withClassPrefix = _useClassNames.withClassPrefix,
      merge = _useClassNames.merge,
      prefix = _useClassNames.prefix;

  var classes = merge(className, withClassPrefix());
  var isSupportGridGap = !(0, _utils.isIE)();

  var count = _react.default.Children.count(children);

  var gridGap = Array.isArray(spacing) ? spacing : [spacing, 0];
  var itemStyles = (_itemStyles = {}, _itemStyles[rtl ? 'marginLeft' : 'marginRight'] = gridGap[0], _itemStyles.marginBottom = gridGap[1], _itemStyles);
  var styles = (0, _extends2.default)({
    alignItems: alignItems,
    justifyContent: justifyContent,
    flexDirection: direction,
    flexWrap: wrap ? 'wrap' : undefined,
    gap: isSupportGridGap ? spacing : undefined
  }, style);
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, rest, {
    ref: ref,
    className: classes,
    style: styles
  }), _react.default.Children.map(children, function (child, index) {
    var childNode = /*#__PURE__*/_react.default.createElement("div", {
      className: prefix('item'),
      style: !isSupportGridGap ? itemStyles : undefined
    }, child);

    return [childNode, index < count - 1 ? divider : null];
  }));
});

Stack.displayName = 'Stack';
Stack.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node,
  classPrefix: _propTypes.default.string,
  direction: _propTypes.default.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  alignItems: _propTypes.default.oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline']),
  justifyContent: _propTypes.default.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around']),
  spacing: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string, _propTypes.default.array]),
  divider: _propTypes.default.node,
  wrap: _propTypes.default.bool
};
var _default = Stack;
exports.default = _default;