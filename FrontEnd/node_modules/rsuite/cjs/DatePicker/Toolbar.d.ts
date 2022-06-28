import React from 'react';
import { StandardProps } from '../@types/common';
import { RangeType } from './types';
import { CalendarLocale } from '../locales';
export type { RangeType } from './types';
export interface ToolbarProps<T = any, Shortcut = T> extends StandardProps {
    hideOkBtn?: boolean;
    locale?: CalendarLocale;
    calendarDate: T;
    ranges?: RangeType<Shortcut>[];
    disabledOkBtn?: (value: T) => boolean;
    disabledShortcut?: (value: T) => boolean;
    onOk?: (event: React.MouseEvent) => void;
    onClickShortcut?: (value: Shortcut, closeOverlay: boolean, event: React.MouseEvent) => void;
}
declare type ToolbarComponent = React.ForwardRefExoticComponent<ToolbarProps> & {
    <T = any, Shortcut = T>(props: ToolbarProps<T, Shortcut>): React.ReactElement | null;
};
/**
 * Toolbar for DatePicker and DateRangePicker
 */
declare const Toolbar: ToolbarComponent;
export default Toolbar;
