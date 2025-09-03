import { forwardRef } from "react";
import { ButtonProp } from "./types";
import clsx from "clsx";
import styles from "./style.module.scss";

export const Button = forwardRef<HTMLButtonElement, ButtonProp>((props, ref) => {
    return (
        <button 
            className={clsx(
                styles["button"]
            )}
            ref={ref} 
            {...props}
        >
            {props.children}
        </button>
    )
})