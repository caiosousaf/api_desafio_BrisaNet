import { ToolbarProps } from './Toolbar';
import { InnerRange } from './types';
import { CalendarState } from '../Calendar';
import { DateRange } from '../DateRangePicker/types';
export declare function getDefaultRanges<T extends Date | DateRange>(date: T): InnerRange<T>[];
/**
 * get Toolbar ranges from Toolbar props
 * @param ranges
 * @param calendarDate
 */
export declare const getRanges: <T extends Date | DateRange>({ ranges, calendarDate }: Pick<ToolbarProps<T, T>, "calendarDate" | "ranges">) => InnerRange<T>[];
export declare const useCalendarState: () => {
    calendarState: CalendarState | undefined;
    reset: () => void;
    openMonth: () => void;
    openTime: () => void;
};
