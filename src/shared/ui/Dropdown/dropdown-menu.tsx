import { FC } from "react";
import { DropdownMenuProp } from "./types";
import styles from "./style.module.scss"

export const DropdownMenu: FC<DropdownMenuProp> = (props) => {
    const { children } = props;

    return (
        <div className={styles['menu']}>
           {children}
        </div>
    )
}