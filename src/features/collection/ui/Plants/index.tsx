import { FC } from "react";
import { useCollectionStore } from "../../../../entities/collection/model";
import { CollectionCard } from "../CollectionCard";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";

export const CollectionPlants: FC = () => {
    const {t} = useTranslation("", {keyPrefix: "collection"})
    const collectionStore = useCollectionStore()

    return (
        <div className={styles["col"]}>
            <div className={styles["col-head"]}>
                <h2 className={styles["col-title"]}>{t("title")}</h2>
                <Link to="/" className={styles["col-link"]}>
                    {t("add-plant")}
                </Link>
            </div>
            {!collectionStore.loading && collectionStore.collectionIDs.length === 0 && (
                <div className={styles["col-text-wrapper"]}>
                    <p className={styles["col-text"]}>{t("not-found")}</p>
                </div>
            )}
            {collectionStore.collectionIDs.map(item => (
                <CollectionCard 
                    id={item.id} 
                    last_watering={item.last_watering} 
                    last_sun_check={item.last_sun_check}
                    last_humidity_check={item.last_humidity_check}
                />
            ))}
        </div>
    )
}