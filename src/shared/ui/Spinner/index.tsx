import { FC } from "react";
import styles from "./style.module.scss";

export const Spinner: FC = () => {
    return (
        <span className={styles["loader"]}></span>
    )
}