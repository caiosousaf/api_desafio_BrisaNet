import React from 'react';
interface PortalProps {
    id?: string;
    container?: HTMLElement | (() => HTMLElement | null) | null;
}
declare function usePortal(props?: PortalProps): {
    target: HTMLElement | null;
    Portal: React.FC<any>;
};
export default usePortal;
