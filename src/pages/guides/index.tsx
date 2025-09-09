import { FC } from "react";
import styles from "./style.module.scss";
import { GuidesTable } from "@features/guides/ui";

export const GuidesPage: FC = () => {
    return (
        <>
            <h2 className={styles["title"]}>Статьи</h2>
            <p className={styles["subtitle"]}>Здесь вы найдете полезные статьи о растениях и уходе за ними.</p>
            <GuidesTable />
        </>
    )
}