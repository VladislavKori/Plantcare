import { PlantCard } from "@widgets/PlantCard";
import { FC } from "react";
import styles from "./style.module.scss";
import { IPlantData } from "@pages/plant";

export interface IPlantListProps {
    data: IPlantData[]
}

export const PlantList: FC<IPlantListProps> = (props) => {
    return (
        <div className={styles["list"]}>
            {props.data.length === 0 && (
                <p>Ничего не найдено</p>
            )}
            {props.data.map(item => (
                <PlantCard {...item} />
            ))}
        </div>
    )
}