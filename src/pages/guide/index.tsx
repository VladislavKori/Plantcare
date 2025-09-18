import { FC } from "react";
import styles from "./style.module.scss";
import { Markdown } from "@widgets/Markdown";
import { formatDate } from "@shared/utils/time";
import { useParams } from "react-router-dom";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { db } from "@shared/utils/firebase";
import { Spinner } from "@shared/ui";
// import { BackHead } from "@widgets/BackHead";

export const GuidePage: FC = () => {
    const params = useParams<{ id: string }>()

    const [value, loading, error] = useDocument(
        doc(db, 'guides', `guide_${params.id}`),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    if (loading) return <Spinner />
    if (error) return <p>Ошибка</p>
    if (value?.data() === undefined) return <p>Статья не найдена</p>

    return (
        <>
            {/* <BackHead  /> */}
            <h2 className={styles["guide-name"]}>{value?.data()?.name}</h2>
            <Markdown>
                {value?.data()?.content}
            </Markdown>
            <p className={styles["guide-date"]}>Опубликовано: {formatDate(value?.data()?.created_at)}</p>
        </>
    )
}