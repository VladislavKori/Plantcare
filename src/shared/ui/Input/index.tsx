import { forwardRef } from "react";
import styles from "./style.module.scss";
import { IInputProp } from "./types";

export const Input = forwardRef<HTMLInputElement, IInputProp>(({
    startContent,
    endContent,
    ...props
}, ref) => {
    return (
        <div className={styles["input"]}>
            {startContent && (
                <div className={styles["icon-left"]}>{startContent}</div>
            )}
            <input ref={ref} className={styles["input-ref"]} {...props} />
            {endContent && (
                <div className={styles["icon-right"]}>{endContent}</div>
            )}
        </div>
    )
})