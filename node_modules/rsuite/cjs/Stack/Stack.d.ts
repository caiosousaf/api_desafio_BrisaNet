import React from 'react';
import { WithAsProps } from '../@types/common';
export interface StackProps extends WithAsProps {
    /**
     * The direction of the children in the stack.
     */
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    /**
     * Define the alignment of the children in the stack on the cross axis
     */
    alignItems?: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';
    /**
     *  Define the alignment of the children in the stack on the inline axis
     */
    justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around';
    /** Define the spacing between immediate children */
    spacing?: number | string | (number | string)[];
    /** Add an element between each child */
    divider?: React.ReactNode;
    /**
     * Define whether the children in the stack are forced onto one line or can wrap onto multiple lines
     */
    wrap?: boolean;
}
declare const Stack: React.ForwardRefExoticComponent<StackProps & React.RefAttributes<HTMLDivElement>>;
export default Stack;
