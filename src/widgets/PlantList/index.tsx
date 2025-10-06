import { PlantCard } from "@widgets/PlantCard";
import { FC } from "react";
import styles from "./style.module.scss";
import { IPlantData } from "@pages/plant";
import { useTranslation } from "react-i18next";

export interface IPlantListProps {
    data: IPlantData[]
}

export const PlantList: FC<IPlantListProps> = (props) => {
    const { t } = useTranslation("", { keyPrefix: "list" })

    return (
        <div className={styles["list"]}>
            {props.data.length === 0 && (
                <p>{t("not-found")}</p>
            )}
            {props.data.map(item => (
                <PlantCard {...item} />
            ))}
        </div>
    )
}