import { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./style.module.scss";
import { NavigationBar } from "../../../widgets";

export const DefaultLayout: FC = () => {
    return (
        <div className="container">
            <div className={styles["layout"]}>
                <div className={styles["layout-content"]}>
                    <Outlet />
                </div>
                <div className={styles["layout-nav"]}>
                    <NavigationBar />
                </div>
            </div>
        </div>
    )
}