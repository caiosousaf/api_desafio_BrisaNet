import React from 'react';
import { WithAsProps } from '../@types/common';
export interface InputGroupAddonProps extends WithAsProps, React.HTMLAttributes<HTMLSpanElement> {
    /** An Input group addon can show that it is disabled */
    disabled?: boolean;
}
declare const InputGroupAddon: React.ForwardRefExoticComponent<InputGroupAddonProps & React.RefAttributes<HTMLSpanElement>>;
export default InputGroupAddon;
