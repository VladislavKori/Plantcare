import { FC } from "react";
import styles from "./style.module.scss";
import { guideMock } from "./mock";
import { Markdown } from "@widgets/Markdown";
import { formatDate } from "@shared/utils/time";

export const GuidePage: FC = () => {
    return (
        <>
            <h2 className={styles["guide-name"]}>{guideMock.name}</h2>
            <Markdown>
                {guideMock.content}
            </Markdown>
            <p className={styles["guide-date"]}>Опубликовано: {formatDate(guideMock.created_at)}</p>
        </>
    )
}