import { FC } from "react";
import styles from "./style.module.scss";
import { Button } from "@shared/ui";

export interface IPlantCard {
    id: string;
    name: string;
    description: string;
    previewURL: string;
}

export const PlantCard: FC<IPlantCard> = (props) => {
    return (
        <div className={styles["card"]}>
            <div className={styles["card-image"]}>
                <img src={props.previewURL} />
            </div>
            <div className={styles["card-info"]}>
                <h2 className={styles["card-name"]}>{props.name}</h2>
                <p className={styles["card-text"]}>{props.description}</p>
                <div className={styles["card-buttons"]}>
                    <Button>Read about</Button>
                    <Button>Add to Collection</Button>
                </div>
            </div>
        </div>
    )
}