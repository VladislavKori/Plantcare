import { FC } from "react";
import { IGuideCardProps } from "./type";
import styles from "./style.module.scss";
import { Button } from "@shared/ui";

export const GuideCard: FC<IGuideCardProps> = (props) => {
    return (
        <div className={styles["card"]}>
            <div className={styles["card-image"]}>
                <img src={props.previewURL} />
            </div>
            <div className={styles["card-info"]}>
                <h2 className={styles["card-name"]}>{props.title}</h2>
                <p className={styles["card-text"]}>{props.description}</p>
                <div className={styles["card-buttons"]}>
                    <Button>Reeeead</Button>
                </div>
            </div>
        </div>
    )
}