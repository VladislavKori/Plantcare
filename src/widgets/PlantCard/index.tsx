import { FC } from "react";
import styles from "./style.module.scss";
import { useNavigate } from "react-router-dom";
import { IPlantData } from "@pages/plant";
import { useTranslation } from "react-i18next";

export const PlantCard: FC<IPlantData> = (props) => {
    const navigate = useNavigate();
    const { i18n, t } = useTranslation("", { keyPrefix: "list" })

    return (
        <div
            className={styles["card"]}
            onClick={() => navigate(`/plant/${props.id}`)}
        >
            <div className={styles["card-image"]}>
                <img src={props.imageURLs[0]} />
            </div>
            <div className={styles["card-info"]}>
                <h2 className={styles["card-name"]}>{i18n.language === "ru" ? props.name : props.nameEn}</h2>
                <p className={styles["card-text"]}>{t("indoor-plant")}</p>
            </div>
        </div>
    )
}