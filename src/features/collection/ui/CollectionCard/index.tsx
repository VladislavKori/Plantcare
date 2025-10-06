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
import { useCollectionStore } from "@entities/collection/model";

interface ICollectionCardProps {
    id: string;
    last_watering: string;
    last_sun_check: string;
    last_humidity_check: string;
}

export const CollectionCard: FC<ICollectionCardProps> = (props) => {
    const { markCheckIn } = useCollectionStore()
    const [value, loading, error] = useDocument(
        doc(db, 'plants', `plant_${props.id}`),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    const calculateProcent = (date: Date | string, maxDays: number): number => {
        const ld = new Date(date).getTime();
        const cd = new Date().getTime();
        const offset = cd - ld;
        const procent = Math.round((100 * offset) / (maxDays * 3600 * 24 * 1000));
        return 100 - procent
    }

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
                    <div
                        onClick={() => markCheckIn(props.id, "last_sun_check")}
                        className={clsx(styles["card-param-circle"], styles["card-param-sun"])}
                    >
                        <div
                            className={clsx(
                                styles["card-param-layer"],
                                styles["card-param-sun"]
                            )}
                            style={{
                                height: `${calculateProcent(
                                    props.last_sun_check,
                                    value?.data()?.sun_check_period_in_days || 2
                                )}%`
                            }}
                        ></div>
                        <SunIcon />
                    </div>
                    <div
                        onClick={() => markCheckIn(props.id, "last_watering")}
                        className={clsx(styles["card-param-circle"], styles["card-param-temp"])}
                    >
                        <div
                            className={clsx(
                                styles["card-param-layer"],
                                styles["card-param-temp"]
                            )}
                            style={{
                                height: `${calculateProcent(
                                    props.last_watering,
                                    value?.data()?.watering_period_in_days || 2
                                )}%`
                            }}
                        ></div>
                        <TempIcon />
                    </div>
                    <div
                        onClick={() => markCheckIn(props.id, "last_humidity_check")}
                        className={clsx(styles["card-param-circle"], styles["card-param-humidity"])}
                    >
                        <div
                            className={clsx(
                                styles["card-param-layer"],
                                styles["card-param-humidity"]
                            )}
                            style={{
                                height: `${calculateProcent(
                                    props.last_humidity_check,
                                    value?.data()?.humidity_check_preiod_in_days || 2
                                )}%`
                            }}
                        ></div>
                        <HumidityIcon />
                    </div>
                </div>
            </div>
        </div>
    )
}