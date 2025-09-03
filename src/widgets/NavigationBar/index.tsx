import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";

export const NavigationBar: FC = () => {
    return (
        <div className={styles["nav"]}>
            <Link className={styles["nav-link"]} to="/guides">Guides</Link>
            <Link className={styles["nav-link"]} to="/">Plants</Link>
            <Link className={styles["nav-link"]} to="/collection">Collection</Link>
        </div>
    )
}