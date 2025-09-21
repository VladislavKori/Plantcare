import { Spinner } from "@shared/ui";
import { db } from "@shared/utils/firebase";
import { doc } from "firebase/firestore";
import { FC } from "react";
import { useDocument } from "react-firebase-hooks/firestore";
import styles from "./style.module.scss";
import clsx from "clsx";

import SunIcon from "@shared/assets/icons/sun.svg?react";
import TempIcon from "@shared/assets/icons/drop.svg?react";
import HumidityIcon from "@shared/assets/icons/flash.svg?react";
import ArrowDownIcon from "@shared/assets/icons/arrow-down.svg?react";

interface ICollectionCardProps {
    id: string;
    last_watering: string;
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
            <div className={styles["card-top"]}>
                <div
                    className={styles["card-image"]}
                    style={{ backgroundImage: `url("${value?.data()?.imageURLs[0]}")` }}
                ></div>
                <div>
                    <h2 className={styles["card-title"]}>{value?.data()?.name}</h2>
                    <p className={styles["card-text"]}>Статус</p>
                </div>
            </div>
            <div className={styles["card-params"]}>
                <div className={styles["card-params-list"]}>
                    <div className={clsx(styles["card-param-circle"], styles["card-param-sun"])}>
                        <SunIcon />
                    </div>
                    <div className={clsx(styles["card-param-circle"], styles["card-param-temp"])}>
                        <TempIcon />
                    </div>
                    <div className={clsx(styles["card-param-circle"], styles["card-param-humidity"])}>
                        <HumidityIcon />
                    </div>
                </div>

                <button className={styles["card-param-button"]}>
                    <ArrowDownIcon />
                </button>

            </div>
        </div>
    )
}