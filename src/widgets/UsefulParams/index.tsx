import { FC } from "react";
import styles from "./style.module.scss";
import SunIcon from "@shared/assets/icons/sun.svg?react";
import TempIcon from "@shared/assets/icons/drop.svg?react";
import HumidityIcon from "@shared/assets/icons/flash.svg?react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

interface UsefulParams {
    lighting: string;
    humidity: string;
    temperature: string;
}

export const UsefulParams: FC<UsefulParams> = (props) => {
    const { t } = useTranslation("", { keyPrefix: "plant"})

    return (
        <div className={styles["useful"]}>
            <div className={styles["useful-section"]}>
                <div className={clsx(styles["useful-icon-box"], styles["useful-red"])}>
                    <SunIcon />
                </div>
                <div className={styles["useful-info"]}>
                    <p className={styles["useful-value"]}>{props.lighting}</p>
                    <p className={styles["useful-title"]}>{t("lighting")}</p>
                </div>
            </div>

            <div className={styles["useful-section"]}>
                <div className={clsx(styles["useful-icon-box"], styles["useful-yellow"])}>
                    <TempIcon />
                </div>
                <div className={styles["useful-info"]}>
                    <p className={styles["useful-value"]}>{props.temperature}</p>
                    <p className={styles["useful-title"]}>{t("temp")}</p>
                </div>
            </div>

            <div className={styles["useful-section"]}>
                <div className={clsx(styles["useful-icon-box"], styles["useful-blue"])}>
                    <HumidityIcon />
                </div>
                <div className={styles["useful-info"]}>
                    <p className={styles["useful-value"]}>{props.humidity}</p>
                    <p className={styles["useful-title"]}>{t("humidity")}</p>
                </div>
            </div>
        </div>
    )
}