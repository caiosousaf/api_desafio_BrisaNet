import React, { Ref } from 'react';
import { PickerLocale } from '../locales';
import { PickerInstance } from '../Picker';
import { FormControlPickerProps, ItemDataType } from '../@types/common';
import { ListProps } from 'react-virtualized/dist/commonjs/List';
export interface SelectProps<T> {
    /** Set group condition key in data */
    groupBy?: string;
    /** Whether dispaly search input box */
    searchable?: boolean;
    /** Whether using virtualized list */
    virtualized?: boolean;
    /**
     * List-related properties in `react-virtualized`
     * https://github.com/bvaughn/react-virtualized/blob/master/docs/List.md#prop-types
     */
    listProps?: ListProps;
    /** Custom search rules. */
    searchBy?: (keyword: string, label: React.ReactNode, item: ItemDataType) => boolean;
    /** Sort options */
    sort?: (isGroup: boolean) => (a: any, b: any) => number;
    /** Customizing the Rendering Menu list */
    renderMenu?: (menu: React.ReactNode) => React.ReactNode;
    /** Custom render menuItems */
    renderMenuItem?: (label: React.ReactNode, item: ItemDataType) => React.ReactNode;
    /** Custom render menu group */
    renderMenuGroup?: (title: React.ReactNode, item: ItemDataType) => React.ReactNode;
    /** Custom render selected items */
    renderValue?: (value: T, item: ItemDataType | ItemDataType[], selectedElement: React.ReactNode) => React.ReactNode;
    /** Called when the option is selected */
    onSelect?: (value: any, item: ItemDataType, event: React.SyntheticEvent) => void;
    /** Called after clicking the group title */
    onGroupTitleClick?: (event: React.SyntheticEvent) => void;
    /** Called when searching */
    onSearch?: (searchKeyword: string, event?: React.SyntheticEvent) => void;
    /** Called when clean */
    onClean?: (event: React.SyntheticEvent) => void;
}
export interface MultipleSelectProps<T> extends Omit<SelectProps<T>, 'renderValue'> {
    /** Custom render selected items */
    renderValue?: (value: T[], item: ItemDataType<T>[], selectedElement: React.ReactNode) => React.ReactNode;
}
export interface SelectPickerProps<T> extends FormControlPickerProps<T, PickerLocale, ItemDataType<T>>, SelectProps<T> {
}
export interface SelectPickerComponent {
    <T>(props: SelectPickerProps<T> & {
        ref?: Ref<PickerInstance>;
    }): JSX.Element | null;
    displayName?: string;
    propTypes?: React.WeakValidationMap<SelectPickerProps<any>>;
}
declare const SelectPicker: SelectPickerComponent;
export default SelectPicker;
