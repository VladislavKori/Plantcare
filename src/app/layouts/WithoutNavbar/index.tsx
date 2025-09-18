import { FC } from "react";
import { Outlet } from "react-router-dom";
import styles from "./style.module.scss";

export const WithoutNavbarLayout: FC = () => {
    return (
        <div className="container">
            <div className={styles["layout"]}>
                <div className={styles["layout-content"]}>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}