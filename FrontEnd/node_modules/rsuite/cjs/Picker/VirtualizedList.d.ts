import React from 'react';
import { ListProps, ListRowProps } from 'react-virtualized/dist/commonjs/List';
import { AutoSizerProps } from 'react-virtualized/dist/commonjs/AutoSizer';
import type { Alignment } from 'react-virtualized';
export interface ListInstance {
    /**
     * Forcefully re-render the inner Grid component.
     */
    forceUpdateGrid(): void;
    /**
     * Gets offset for a given row and alignment.
     */
    getOffsetForRow(params: {
        alignment?: Alignment;
        index?: number;
    }): number;
    /**
     * Pre-measure all rows in a List.
     */
    measureAllRows(): void;
    /**
     * Recompute row heights and offsets after the specified index (defaults to 0).
     */
    recomputeRowHeights(index?: number): void;
    /**
     * Scroll to the specified offset. Useful for animating position changes.
     */
    scrollToPosition(scrollTop?: number): void;
    /**
     * Ensure row is visible. This method can be used to safely scroll back to a cell
     * that a user has scrolled away from even if it was previously scrolled to.
     */
    scrollToRow(index?: number): void;
}
export type { ListProps, AutoSizerProps, ListRowProps };
export declare const List: React.ComponentType<ListProps>;
export declare const AutoSizer: React.ComponentType<AutoSizerProps>;
