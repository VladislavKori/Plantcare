import { FC } from "react";
import styles from "./style.module.scss";
import { Button } from "@shared/ui";
import { useNavigate } from "react-router-dom";

export interface IPlantCard {
    id: string;
    name: string;
    description: string;
    previewURL: string;
}

export const PlantCard: FC<IPlantCard> = (props) => {
    const navigate = useNavigate()
    
    return (
        <div className={styles["card"]}>
            <div className={styles["card-image"]}>
                <img src={props.previewURL} />
            </div>
            <div className={styles["card-info"]}>
                <h2 className={styles["card-name"]}>{props.name}</h2>
                <p className={styles["card-text"]}>{props.description}</p>
                <div className={styles["card-buttons"]}>
                    <Button onClick={() => navigate(`/plant/${props.id}`)}>Read about</Button>
                    <Button>Add to Collection</Button>
                </div>
            </div>
        </div>
    )
}