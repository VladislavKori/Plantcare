import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.scss";
import clsx from "clsx";

export const NavigationBar: FC = () => {
    return (
        <div className={styles["nav"]}>
            <NavLink
                className={({ isActive }) =>
                    isActive ? clsx(styles["nav-link"], styles["nav-link-active"]) : styles["nav-link"]
                }
                to="/guides"
            >
                Guides
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? clsx(styles["nav-link"], styles["nav-link-active"]) : styles["nav-link"]
                }
                to="/"
            >
                Plants
            </NavLink>
            <NavLink
                className={({ isActive }) =>
                    isActive ? clsx(styles["nav-link"], styles["nav-link-active"]) : styles["nav-link"]
                }
                to="/collection"
            >
                Collection
            </NavLink>
        </div>
    )
}