import { FC } from "react";
import { IGuideCardProps } from "./type";
import styles from "./style.module.scss";
import { Button } from "@shared/ui";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const GuideCard: FC<IGuideCardProps> = (props) => {
    const { i18n, t } = useTranslation("", { keyPrefix: "guides" });
    const navigate = useNavigate();

    return (
        <div className={styles["card"]}>
            <div className={styles["card-image"]}>
                <img src={props.previewURL} />
            </div>
            <div className={styles["card-info"]}>
                <h2 className={styles["card-name"]}>{i18n.language === "ru" ? props.name : props.nameEn}</h2>
                <p className={styles["card-text"]}>{i18n.language === "ru" ? props.description : props.descriptionEn}</p>
                <div className={styles["card-buttons"]}>
                    <Button onClick={() => navigate(`/guide/${props.id}`)}>
                        {t("read")}
                    </Button>
                </div>
            </div>
        </div>
    )
}