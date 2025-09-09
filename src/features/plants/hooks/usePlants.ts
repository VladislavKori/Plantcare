import { IPlantData } from "@pages/plant";
import { db } from "@shared/utils/firebase";
import { collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

export const usePlants = () => {
    const [plants, setPlants] = useState<IPlantData[]>([])
    const [pLoading, setPLoading] = useState<boolean>(false);
    const [filter, setFilter] = useState<string>("")

    const [value, loading, error] = useCollection(
        collection(db, 'plants'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    useEffect(() => {
        setPLoading(loading);

        if (!loading && value) {
            const allPlants = value.docs.map(
                (doc) => ({ ...doc.data() } as IPlantData)
            );

            const filteredPlants = filter
                ? allPlants.filter((el) =>
                    el.name.toLowerCase().includes(filter.toLowerCase())
                )
                : allPlants;

            setPlants(filteredPlants);
        }
    }, [value, loading, filter]);

    return {
        plants,
        loading: pLoading,
        error,
        filter,
        setFilter
    }
}