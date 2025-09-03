import { FC } from "react";
import styles from "./style.module.scss";

export const User: FC = () => {
    const photoURL = window.Telegram.WebApp.initDataUnsafe?.user?.photo_url
    const name = window.Telegram.WebApp.initDataUnsafe?.user?.first_name;
    const username = window.Telegram.WebApp.initDataUnsafe?.user?.username;

    return (
        <div className={styles["user"]}>
            <div className={styles["user-avatar"]}>
                <img src={photoURL} alt="user" />
            </div>
            <div className={styles["user-info"]}>
                <span className={styles["user-name"]}>{name}</span>
                {username && <span className={styles["user-tag"]}>@{username}</span>}
            </div>
        </div>
    )
}