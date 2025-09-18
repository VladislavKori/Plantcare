import { FC } from "react";
import styles from "./style.module.scss";
import SunIcon from "@shared/assets/icons/sun.svg?react";
import TempIcon from "@shared/assets/icons/drop.svg?react";
import HumidityIcon from "@shared/assets/icons/flash.svg?react";
import clsx from "clsx";

interface UsefulParams {
    lighting: string;
    humidity: string;
    temperature: string;
}

export const UsefulParams: FC<UsefulParams> = (props) => {
    return (
        <div className={styles["useful"]}>
            <div className={styles["useful-section"]}>
                <div className={clsx(styles["useful-icon-box"], styles["useful-red"])}>
                    <SunIcon />
                </div>
                <div className={styles["useful-info"]}>
                    <p className={styles["useful-value"]}>{props.lighting}</p>
                    <p className={styles["useful-title"]}>Lighting</p>
                </div>
            </div>

            <div className={styles["useful-section"]}>
                <div className={clsx(styles["useful-icon-box"], styles["useful-yellow"])}>
                    <TempIcon />
                </div>
                <div className={styles["useful-info"]}>
                    <p className={styles["useful-value"]}>{props.temperature}</p>
                    <p className={styles["useful-title"]}>Temperature</p>
                </div>
            </div>

            <div className={styles["useful-section"]}>
                <div className={clsx(styles["useful-icon-box"], styles["useful-blue"])}>
                    <HumidityIcon />
                </div>
                <div className={styles["useful-info"]}>
                    <p className={styles["useful-value"]}>{props.humidity}</p>
                    <p className={styles["useful-title"]}>Humidity</p>
                </div>
            </div>
        </div>
    )
}