import { FC } from "react";
import styles from "./style.module.scss";
import { Button } from "@shared/ui";
import { useNavigate } from "react-router-dom";
import { IPlantData } from "@pages/plant";
import { useCollectionStore } from "@entities/collection/model";

export const PlantCard: FC<IPlantData> = (props) => {
    const navigate = useNavigate();
    const collectionStore = useCollectionStore();

    return (
        <div className={styles["card"]}>
            <div className={styles["card-image"]}>
                <img src={props.imageURLs[0]} />
            </div>
            <div className={styles["card-info"]}>
                <h2 className={styles["card-name"]}>{props.name}</h2>
                <p className={styles["card-text"]}>{props.description}</p>
                <div className={styles["card-buttons"]}>
                    <Button onClick={() => navigate(`/plant/${props.id}`)}>Подробнее</Button>
                    {collectionStore.plantIDExistInCollection(props.id) ? (
                        <Button
                            onClick={() => collectionStore.removeFromCollection(props.id)}
                        >
                            Удалить
                        </Button>
                    ) : (
                        <Button
                            onClick={() => collectionStore.addToCollection(props.id)}
                        >
                            В Коллекцию
                        </Button>
                    )}
                </div>
            </div>
        </div>
    )
}