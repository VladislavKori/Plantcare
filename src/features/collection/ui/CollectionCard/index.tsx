import { Button, Spinner } from "@shared/ui";
import { db } from "@shared/utils/firebase";
import { doc } from "firebase/firestore";
import { FC } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";
import { useCollectionStore } from "@entities/collection/model";

interface ICollectionCardProps {
    id: string;
    last_watering: string;
}

export const CollectionCard: FC<ICollectionCardProps> = (props) => {
    const { markWatering } = useCollectionStore()
    const [value, loading, error] = useDocument(
        doc(db, 'plants', `plant_${props.id}`),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    const calculateDate = (last_watering: string, period: number) => {
        const date = new Date(last_watering);
        const current_date = new Date();

        if (date.getFullYear() === current_date.getFullYear() && date.getDate() + period < current_date.getDate()) return true
        return false;
    }

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
                {calculateDate(props.last_watering, value?.data()?.watering_period_in_days) ? (<>
                    <p className={styles["card-text"]}>Полить!!!</p>
                    <Button fullWidth onClick={() => markWatering(props.id)}>Полил</Button>
                </>) : (
                    <p className={styles["card-text"]}>Полив не нужен</p>
                )}
            </div>
        </div>
    )
}