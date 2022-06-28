import React from 'react';
import { Column, Cell, HeaderCell, ColumnGroup, TableProps } from 'rsuite-table';
import { StandardProps, RsRefForwardingComponent } from '../@types/common';
export interface TableInstance extends React.Component<TableProps> {
    scrollTop: (top: number) => void;
    scrollLeft: (left: number) => void;
}
export interface CellProps extends StandardProps {
    /** Data binding key, but also a sort of key */
    dataKey?: string;
    /** Row Number */
    rowIndex?: number;
    /** Row Data */
    rowData?: any;
}
interface TableComponent extends RsRefForwardingComponent<'div', TableProps & {
    ref?: React.Ref<TableInstance>;
}> {
    Column: typeof Column;
    Cell: typeof Cell;
    HeaderCell: typeof HeaderCell;
    ColumnGroup: typeof ColumnGroup;
}
declare const Table: TableComponent;
export default Table;
