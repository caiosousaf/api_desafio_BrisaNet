import { DateRange, RangeType } from './types';
export declare const setTimingMargin: (date: any, way?: string) => Date;
export declare function getCalendarDate({ value }: {
    value: [] | [Date] | [Date, Date] | null;
}): DateRange;
export declare const getDefaultRanges: () => RangeType[];
export declare const isSameRange: (source: DateRange | null, dest: DateRange | null, format: string) => boolean;
export declare const getMonthHoverRange: (date: Date) => DateRange;
export declare const getWeekHoverRange: (isoWeek: boolean, date: Date) => DateRange;
