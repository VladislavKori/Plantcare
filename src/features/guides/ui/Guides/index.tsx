import { Input, Spinner } from "@shared/ui";
import { FC } from "react";
import SearchIcon from "@shared/assets/search.svg?react"
import { GuideList } from "@widgets/GuideList";
import { useGuides } from "@features/guides/hooks/useGuides";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";

export const GuidesTable: FC = () => {
    const { t: commonT } = useTranslation("", { keyPrefix: "error" });
    const { t } = useTranslation("", { keyPrefix: "guides" });
    const { guides, loading, error, filter, setFilter } = useGuides()

    if (loading) return <div className={styles["loading"]}><Spinner /></div>
    if (error) return <p>{commonT("error")}</p>

    return (
        <>
            <Input
                placeholder={t("search")}
                startContent={<SearchIcon />}
                value={filter}
                onChange={e => setFilter(e.target.value)}
            />
            <GuideList data={guides} />
        </>
    )
}