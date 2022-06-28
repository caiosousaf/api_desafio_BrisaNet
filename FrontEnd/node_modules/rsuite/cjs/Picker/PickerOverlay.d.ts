import React from 'react';
import { WithAsProps, RsRefForwardingComponent } from '../@types/common';
import { OverlayTriggerInstance } from '../Picker';
export interface PickerOverlayProps extends WithAsProps {
    placement?: string;
    autoWidth?: boolean;
    children?: React.ReactNode;
    target?: React.RefObject<OverlayTriggerInstance>;
    onKeyDown?: (event: React.KeyboardEvent) => void;
}
declare const PickerOverlay: RsRefForwardingComponent<'div', PickerOverlayProps>;
export default PickerOverlay;
