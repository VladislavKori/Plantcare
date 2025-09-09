import { Spinner } from "@shared/ui";
import { db } from "@shared/utils/firebase";
import { doc } from "firebase/firestore";
import { FC } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

interface ICollectionCardProps {
    id: string;
}

export const CollectionCard: FC<ICollectionCardProps> = (props) => {
    const [value, loading, error] = useDocument(
        doc(db, 'plants', `plant_${props.id}`),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    if (loading) return <Spinner />
    if (error) return <p>Ошибка</p>

    return (
        <div className={styles["card"]}>
            <Link
                to={`/plant/${props.id}`}
                className={styles["card-image"]}
                style={{ backgroundImage: `url("${value?.data()?.imageURLs[0]}")` }}
            ></Link>
            <div>
                <h2 className={styles["card-title"]}>{value?.data()?.name}</h2>
                <p>Информация о поливе</p>
            </div>
        </div>
    )
}