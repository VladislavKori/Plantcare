import { LanguageSwitch } from "@features/settings";
import { GuideBackHead } from "@widgets/GuideBackHead";
import { FC } from "react";
import styles from "./style.module.scss";

export const SettingPage: FC = () => {
    return (
        <>
            <GuideBackHead />
            <h2 className={styles["title"]}>Настройки</h2>
            <LanguageSwitch />
        </>
    )
}