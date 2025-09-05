import { FC } from "react";
import styles from "./style.module.scss";
import { GuidesTable } from "@features/guides/ui";

export const GuidesPage: FC = () => {
    return (
        <>
            <h2 className={styles["title"]}>Guides</h2>
            <p className={styles["subtitle"]}>Here you will find useful articles about plants and their care.</p>
            <GuidesTable />
        </>
    )
}