import React from 'react';
import { RsRefForwardingComponent, WithAsProps } from '../@types/common';
export interface HeaderProps extends WithAsProps {
    disabledBackward?: boolean;
    disabledForward?: boolean;
    showDate?: boolean;
    showMeridian?: boolean;
    showMonth?: boolean;
    showTime?: boolean;
    disabledTime?: (date: Date) => boolean;
    onMoveBackward?: () => void;
    onMoveForward?: () => void;
    onToggleMeridian?: (event: React.MouseEvent) => void;
    onToggleMonthDropdown?: (event: React.MouseEvent) => void;
    onToggleTimeDropdown?: (event: React.MouseEvent) => void;
    renderTitle?: (date: Date) => React.ReactNode;
    renderToolbar?: (date: Date) => React.ReactNode;
}
declare const Header: RsRefForwardingComponent<'div', HeaderProps>;
export default Header;
