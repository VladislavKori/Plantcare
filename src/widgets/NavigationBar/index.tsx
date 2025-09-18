import { FC } from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.scss";
import clsx from "clsx";
import PlantIcon from "@shared/assets/icons/plant.svg?react";
import HomeIcon from "@shared/assets/icons/home.svg?react";
import BookIcon from "@shared/assets/icons/book.svg?react";

export const NavigationBar: FC = () => {
    return (
        <div className={styles["nav-wrapper"]}>
            <div className={styles["nav"]}>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? clsx(styles["nav-link"], styles["nav-link-active"]) : styles["nav-link"]
                    }
                    to="/guides"
                >
                    <BookIcon />
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? clsx(styles["nav-link"], styles["nav-link-active"]) : styles["nav-link"]
                    }
                    to="/"
                >
                    <PlantIcon />
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? clsx(styles["nav-link"], styles["nav-link-active"]) : styles["nav-link"]
                    }
                    to="/collection"
                >
                    <HomeIcon />
                </NavLink>
            </div>
        </div>
    )
}