import { FC } from "react";
import { Input, Spinner } from "@shared/ui";
import SearchIcon from "@shared/assets/search.svg?react"
import { PlantList } from "@widgets/PlantList";
import { usePlants } from "@features/plants/hooks/usePlants";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";

export const HomePlants: FC = () => {
    const { t } = useTranslation("", { keyPrefix: "list" });
    const { t: commonT } = useTranslation("", { keyPrefix: "common" });
    const { plants, loading, error, filter, setFilter } = usePlants();

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
            <PlantList data={plants} />
        </>
    )
}