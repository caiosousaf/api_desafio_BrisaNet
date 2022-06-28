import React, { HTMLAttributes } from 'react';
import { HeaderProps } from './Header';
import { RsRefForwardingComponent, WithAsProps } from '../@types/common';
import { CalendarLocale } from '../locales';
export declare enum CalendarState {
    'DROP_TIME' = "DROP_TIME",
    'DROP_MONTH' = "DROP_MONTH"
}
export interface CalendarProps extends WithAsProps, Omit<HTMLAttributes<HTMLDivElement>, 'onSelect' | 'onChange' | 'onMouseMove'>, Omit<HeaderProps, 'onMoveForward' | 'onMoveBackward' | 'showDate' | 'showTime' | 'showMonth'> {
    /** The status of the calendar display: day, month, time. */
    calendarState?: CalendarState;
    /** The panel render based on date range */
    dateRange?: Date[];
    /** Disabled date */
    disabledDate?: (date: Date) => boolean;
    /** Disabled hours */
    disabledHours?: (hour: number, date: Date) => boolean;
    /** Disabled minutes */
    disabledMinutes?: (minute: number, date: Date) => boolean;
    /** Hidden seconds */
    disabledSeconds?: (second: number, date: Date) => boolean;
    /** Format str */
    format: string;
    /** Hidden hours */
    hideHours?: (hour: number, date: Date) => boolean;
    /** Hidden minutes */
    hideMinutes?: (minute: number, date: Date) => boolean;
    /** Hidden seconds */
    hideSeconds?: (second: number, date: Date) => boolean;
    /** The value that mouse hover on in range selection */
    hoverRangeValue?: [Date, Date];
    /** Is it in the same month as today */
    inSameMonth?: (date: Date) => boolean;
    /** ISO 8601 standard, each calendar week begins on Monday and Sunday on the seventh day */
    isoWeek?: boolean;
    /** Limit showing how many years in the future */
    limitEndYear?: number;
    /** Custom locale */
    locale: CalendarLocale;
    /** Callback after the date has changed */
    onChangePageDate?: (nextPageDate: Date, event: React.MouseEvent) => void;
    /** Callback after the time has changed */
    onChangePageTime?: (nextPageTime: Date, event: React.MouseEvent) => void;
    /** Callback after mouse enter other date cell */
    onMouseMove?: (date: Date) => void;
    /** Switch to the callback triggered after the previous month. */
    onMoveBackward?: (nextPageDate: Date) => void;
    /** Switch to the callback triggered after the next month. */
    onMoveForward?: (nextPageDate: Date) => void;
    /** Callback fired before the date selected */
    onSelect?: (date: Date, event: React.MouseEvent) => void;
    /** Date displayed on the current page */
    calendarDate: Date;
    /** Custom rendering cell*/
    renderCell?: (date: Date) => React.ReactNode;
    /** Whether to show week numbers */
    showWeekNumbers?: boolean;
    inline?: boolean;
}
declare const Calendar: RsRefForwardingComponent<'div', CalendarProps>;
export default Calendar;
