import React from 'react';
import Calendar from './Calendar';
import { CalendarLocale } from '../locales';
import { RsRefForwardingComponent, WithAsProps } from '../@types/common';
export interface CalendarPanelProps extends WithAsProps {
    /** Controlled value */
    value?: Date;
    /** Default value  */
    defaultValue?: Date;
    /** ISO 8601 standard, each calendar week begins on Monday and Sunday on the seventh day  */
    isoWeek?: boolean;
    /** Display a compact calendar   */
    compact?: boolean;
    /** Show border   */
    bordered?: boolean;
    /** Custom locale */
    locale?: CalendarLocale;
    /**  Callback fired before the value changed  */
    onChange?: (date: Date) => void;
    /** Callback fired before the date selected */
    onSelect?: (date: Date) => void;
    /** Custom render calendar cells  */
    renderCell?: (date: Date) => React.ReactNode;
}
declare const CalendarPanel: RsRefForwardingComponent<typeof Calendar, CalendarPanelProps>;
export default CalendarPanel;
