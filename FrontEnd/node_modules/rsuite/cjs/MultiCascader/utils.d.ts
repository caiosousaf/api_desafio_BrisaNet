/// <reference types="react" />
import { MultiCascaderProps, ValueType } from './MultiCascader';
import { ItemDataType } from '../@types/common';
export interface ItemType extends ItemDataType {
    parent?: ItemType;
}
interface ItemKeys {
    valueKey: string;
    labelKey: string;
    childrenKey: string;
}
/**
 * Get all parents of a node
 * @param node
 */
export declare const getParents: (node: ItemType) => ItemType[];
/**
 * Check if any child nodes are selected.
 * @param node
 * @param value
 * @param itemKeys
 */
export declare const isSomeChildChecked: (node: ItemDataType, value: ValueType, itemKeys: Omit<ItemKeys, 'labelKey'>) => any;
/**
 * Check if the parent is selected.
 * @param node
 * @param value
 * @param itemKeys
 */
export declare const isSomeParentChecked: (node: ItemDataType, value: ValueType, itemKeys: Pick<ItemKeys, 'valueKey'>) => any;
export declare const getOtherItemValuesByUnselectChild: <T>(itemNode: ItemType, value: any, itemKeys: Omit<ItemKeys, 'labelKey'>) => T[];
/**
 * Remove the values of all children.
 */
export declare const removeAllChildrenValue: <T>(value: T[], item: ItemType, itemKeys: Omit<ItemKeys, 'labelKey'>) => T[] | undefined;
/**
 * A hook to flatten tree structure data
 * @param data
 */
export declare function useFlattenData(data: ItemDataType[], itemKeys: ItemKeys): {
    addFlattenData: (children: ItemDataType[], parent: ItemDataType) => void;
    flattenData: ItemDataType<string | number>[];
};
/**
 * A hook for column data
 * @param flattenData
 */
export declare function useColumnData(flattenData: ItemType[]): {
    columnData: ItemDataType<string | number>[][];
    addColumn: (column: ItemDataType[], index: number) => void;
    setColumnData: import("react").Dispatch<import("react").SetStateAction<ItemDataType<string | number>[][]>>;
    enforceUpdateColumnData: (nextData: ItemDataType[]) => void;
};
/**
 * A hook that converts the value into a cascading value
 * @param props
 * @param flattenData
 */
export declare function useCascadeValue<T>(props: Partial<MultiCascaderProps<T[]>> & ItemKeys, flattenData: ItemType[]): {
    value: T[];
    setValue: import("react").Dispatch<import("react").SetStateAction<T[]>>;
    splitValue: (item: ItemType, checked: boolean, value: T[]) => {
        value: T[];
        removedValue: T[];
    };
};
export {};
