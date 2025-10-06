import { ReactNode } from "react";

export interface DropdownProp {
    children: ReactNode;
    side?: 'left' | 'center' | 'right';
    closeTrigger?: boolean;
    onChange?: (value: boolean) => void;
}

export interface DropdownTriggerProp {
    children: ReactNode
}

export interface DropdownMenuProp {
    children: ReactNode
}