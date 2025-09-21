import { FC } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./style.module.scss";
import ArrowLeftIcon from "@shared/assets/icons/arrow.svg?react";

export const GuideBackHead: FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles["head"]}>
            <button onClick={() => navigate(-1)} className={styles["head-button"]}>
                <ArrowLeftIcon />
            </button>
        </div>
    )
}