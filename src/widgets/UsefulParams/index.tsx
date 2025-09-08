import { FC } from "react";
import styles from "./style.module.scss";

interface UsefulParams {
    light?: string;
    temp?: string;
    water?: string;
}

export const UsefulParams: FC<UsefulParams> = (props) => {
    if (!props.light && !props.temp && !props.water) return null;

    return (
        <div className={styles["useful"]}>
            {props.light && (
                <div className={styles["useful-section"]}>
                    <p className={styles["useful-title"]}>Свет</p>
                    <p className={styles["useful-value"]}>{props.light}</p>
                </div>
            )}
            {props.temp && (
                <div className={styles["useful-section"]}>
                    <p className={styles["useful-title"]}>Темп.</p>
                    <p className={styles["useful-value"]}>{props.temp}</p>
                </div>
            )}
            {props.water && (
                <div className={styles["useful-section"]}>
                    <p className={styles["useful-title"]}>Вода</p>
                    <p className={styles["useful-value"]}>{props.water}</p>
                </div>
            )}
        </div>
    )
}