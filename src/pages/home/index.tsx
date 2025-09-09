import { FC } from "react";
import styles from "./style.module.scss";
import { HomePlants } from "@features/plants/ui";

export const HomePage: FC = () => {
    return (
        <>
            <h2 className={styles["title"]}>Найдите ваше растение!</h2>
            <p className={styles["subtitle"]}>Найдите и систематизируйте цветы, которые вы выращиваете дома, и добавьте их в свою коллекцию, чтобы не забыть о поливе и ознакомиться с современными советами по уходу.</p>
            <HomePlants />
        </>
    )
}