import { FC } from "react";
import styles from "./style.module.scss";
import { GuidesTable } from "@features/guides/ui";
import { useTranslation } from "react-i18next";

export const GuidesPage: FC = () => {
    const { t } = useTranslation("", { keyPrefix: "guides" })

    return (
        <>
            <h2 className={styles["title"]}>{t("title")}</h2>
            <p className={styles["subtitle"]}>{t("subtitle")}</p>
            <GuidesTable />
        </>
    )
}   