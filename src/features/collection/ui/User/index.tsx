import { FC } from "react";
import styles from "./style.module.scss";

export const User: FC = () => {
    return (
        <div className={styles["user"]}>
            <div className={styles["user-avatar"]}>
                <img 
                    src={window.Telegram.WebApp.initDataUnsafe?.user?.photo_url}
                    alt="user" 
                />
            </div>
            <div className={styles["user-info"]}>
                <span className={styles["user-name"]}>{window.Telegram.WebApp.initDataUnsafe?.user?.first_name}</span>
                <span className={styles["user-tag"]}>@{window.Telegram.WebApp.initDataUnsafe?.user?.username}</span>
            </div>
        </div>
    )
}