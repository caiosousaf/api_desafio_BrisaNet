/// <reference types="react" />
import { CascaderProps } from './Cascader';
import { ItemDataType } from '../@types/common';
export declare function getColumnsAndPaths<T extends ItemDataType>(data: T[], value: any, options: any): {
    columns: ItemDataType<string | number>[][];
    paths: T[];
};
export declare function usePaths(props: CascaderProps): {
    enforceUpdate: (nextValue: any, isAttachChildren?: boolean) => void;
    columnData: ItemDataType<string | number>[][];
    valueToPaths: ItemDataType<string | number>[];
    selectedPaths: ItemDataType<string | number>[];
    setValueToPaths: import("react").Dispatch<import("react").SetStateAction<ItemDataType<string | number>[]>>;
    setColumnData: import("react").Dispatch<import("react").SetStateAction<ItemDataType<string | number>[][]>>;
    setSelectedPaths: import("react").Dispatch<import("react").SetStateAction<ItemDataType<string | number>[]>>;
    addColumn: (column: ItemDataType[], index: number) => void;
};
