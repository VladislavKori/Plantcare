import { FC } from "react";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { IPlantData } from "@pages/plant";

export const PlantCard: FC<IPlantData> = (props) => {
    const navigate = useNavigate();

    return (
        <div 
            className={styles["card"]} 
            onClick={() => navigate(`/plant/${props.id}`)}
        >
            <div className={styles["card-image"]}>
                <img src={props.imageURLs[0]} />
            </div>
            <div className={styles["card-info"]}>
                <h2 className={styles["card-name"]}>{props.name}</h2>
                <p className={styles["card-text"]}>Indoor plant</p>
            </div>
        </div>
    )
}