import { LanguageSwitch } from "@features/settings";
import { GuideBackHead } from "@widgets/GuideBackHead";
import { FC } from "react";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";

export const SettingPage: FC = () => {
    const { t } = useTranslation("", {keyPrefix: "settings"})

    return (
        <>
            <GuideBackHead />
            <h2 className={styles["title"]}>{t("title")}</h2>
            <LanguageSwitch />
        </>
    )
}