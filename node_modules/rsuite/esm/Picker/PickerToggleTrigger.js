import _extends from "@babel/runtime/helpers/esm/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import React from 'react';
import pick from 'lodash/pick';
import OverlayTrigger from '../Overlay/OverlayTrigger';
import { placementPolyfill } from '../utils';
import { CustomConsumer } from '../CustomProvider';
export var omitTriggerPropKeys = ['onEntered', 'onExited', 'onEnter', 'onEntering', 'onExit', 'onExiting', 'open', 'defaultOpen', 'onHide', 'container', 'containerPadding', 'preventOverflow'];
export var pickTriggerPropKeys = [].concat(omitTriggerPropKeys, ['disabled', 'plaintext', 'readOnly']);
var PickerToggleTrigger = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var pickerProps = props.pickerProps,
      speaker = props.speaker,
      placement = props.placement,
      _props$trigger = props.trigger,
      trigger = _props$trigger === void 0 ? 'click' : _props$trigger,
      rest = _objectWithoutPropertiesLoose(props, ["pickerProps", "speaker", "placement", "trigger"]);

  return /*#__PURE__*/React.createElement(CustomConsumer, null, function (context) {
    return /*#__PURE__*/React.createElement(OverlayTrigger, _extends({}, rest, pick(pickerProps, pickTriggerPropKeys), {
      ref: ref,
      trigger: trigger,
      placement: placementPolyfill(placement, context === null || context === void 0 ? void 0 : context.rtl),
      speaker: speaker
    }));
  });
});
PickerToggleTrigger.displayName = 'PickerToggleTrigger';
export default PickerToggleTrigger;