import { FC } from "react";
import styles from "./style.module.scss";
import { Markdown } from "@widgets/Markdown";
import { formatDate } from "@shared/utils/time";
import { useParams } from "react-router-dom";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { db } from "@shared/utils/firebase";
import { Spinner } from "@shared/ui";
import { GuideBackHead } from "@widgets/GuideBackHead";
import { useTranslation } from "react-i18next";

export const GuidePage: FC = () => {
    const params = useParams<{ id: string }>()
    const { i18n, t } = useTranslation("", { keyPrefix: "guide" });
    const { t: commonT } = useTranslation("", { keyPrefix: "common" });

    const [value, loading, error] = useDocument(
        doc(db, 'guides', `guide_${params.id}`),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    if (loading) return <Spinner />
    if (error) return <p>{commonT("error")}</p>
    if (value?.data() === undefined) return <p>{t("not-found")}</p>

    return (
        <>
            <GuideBackHead />
            <h2 className={styles["guide-name"]}>
                {value?.data()?.[i18n.language === "ru" ? "name" : "nameEn"]}
            </h2>
            <Markdown>
                {value?.data()?.[i18n.language === "ru" ? "content" : "contentEn"]}
            </Markdown>
            <p className={styles["guide-date"]}>{t("public")}: {formatDate(value?.data()?.created_at)}</p>
        </>
    )
}