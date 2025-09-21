import { FC } from "react";
import styles from "./style.module.scss";
import SettingIcon from "@shared/assets/icons/setting.svg?react";
import { Link } from "react-router-dom";

export const User: FC = () => {
    const photoURL = window.Telegram.WebApp.initDataUnsafe?.user?.photo_url
    const name = window.Telegram.WebApp.initDataUnsafe?.user?.first_name;
    const username = window.Telegram.WebApp.initDataUnsafe?.user?.username;

    return (
        <div className={styles["user"]}>
            <div className={styles["user-left"]}>
                <div className={styles["user-avatar"]}>
                    <img src={photoURL} alt="user" />
                </div>
                <div className={styles["user-info"]}>
                    <span className={styles["user-name"]}>{name}</span>
                    {username && <span className={styles["user-tag"]}>@{username}</span>}
                </div>
            </div>
            <div className={styles["user-right"]}>
                <Link to="/settings" className={styles["user-settings"]}>
                    <SettingIcon />
                </Link>
            </div>
        </div>
    )
}