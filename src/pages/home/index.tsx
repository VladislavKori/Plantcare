import { FC } from "react";
import styles from "./style.module.scss";
import { HomePlants } from "@features/plants/ui";

export const HomePage: FC = () => {
    return (
        <>
            <h2 className={styles["title"]}>Find interest plant!</h2>
            <p className={styles["subtitle"]}>Discover and organize the flowers you grow at home, adding them to your collection to remember watering and learn up-to-date care tips.</p>
            <HomePlants />
        </>
    )
}