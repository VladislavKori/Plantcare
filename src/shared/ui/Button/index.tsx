import { forwardRef } from "react";
import { ButtonProp } from "./types";
import clsx from "clsx";
import styles from "./style.module.scss";

export const Button = forwardRef<HTMLButtonElement, ButtonProp>(({
    fullWidth,
    ...props
}, ref) => {
    return (
        <button 
            className={clsx(
                styles["button"],
                fullWidth && styles["full-width"], 
            )}
            ref={ref} 
            {...props}
        >
            {props.children}
        </button>
    )
})