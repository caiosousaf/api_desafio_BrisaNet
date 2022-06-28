/// <reference types="react" />
import { RsRefForwardingComponent } from '../@types/common';
export interface PickerInstance {
    root?: Element;
    overlay?: Element;
    target?: HTMLElement;
    updatePosition?: () => void;
    open?: () => void;
    close?: () => void;
}
export declare type PickerComponent<P> = RsRefForwardingComponent<'div', P & {
    ref?: React.Ref<PickerInstance>;
}>;
