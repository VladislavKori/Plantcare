import { IPlantCard, PlantCard } from "@widgets/PlantCard";
import { FC } from "react";
import styles from "./style.module.scss";

export interface IPlantListProps {
    data: IPlantCard[]
}

export const PlantList: FC<IPlantListProps> = (props) => {
    return (
        <div className={styles["list"]}>
            {props.data.map(item => (
                <PlantCard {...item} />
            ))}
        </div>
    )
}