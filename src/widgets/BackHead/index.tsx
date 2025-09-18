import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import ArrowLeftIcon from "@shared/assets/icons/arrow.svg?react";
import PlusIcon from "@shared/assets/icons/plus.svg?react";
import MinusIcon from "@shared/assets/icons/minus.svg?react";
import { useCollectionStore } from "@entities/collection/model";

interface BackHeadProps {
    id: string;
    name: string;
}

export const BackHead: FC<BackHeadProps> = (props) => {
    const navigate = useNavigate();
    const collectionStore = useCollectionStore();

    return (
        <div className={styles["head"]}>
            <button onClick={() => navigate(-1)} className={styles["head-button"]}>
                <ArrowLeftIcon />
            </button>
            <p className={styles["head-name"]}>{props.name}</p>
            {collectionStore.plantIDExistInCollection(props.id) ? (
                <button
                    className={styles["head-button"]}
                    onClick={() => collectionStore.removeFromCollection(props.id as string)}
                >
                    <MinusIcon />
                </button>
            ) : (
                <button
                    className={styles["head-button"]}
                    onClick={() => collectionStore.addToCollection(props.id as string)}
                >
                    <PlusIcon />
                </button>
            )}

        </div>
    )
}