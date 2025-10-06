import { FC } from "react";
import { DropdownTriggerProp } from "./types";

export const DropdownTrigger: FC<DropdownTriggerProp> = (props) => {
    const { children } = props;

    return (
        <>
            {children}
        </>
    )
}