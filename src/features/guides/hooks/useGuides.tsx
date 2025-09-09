import { db } from "@shared/utils/firebase";
import { IGuideCard } from "@widgets/GuideCard/type";
import { collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";

export const useGuides = () => {
    const [guides, setGuides] = useState<IGuideCard[]>([])
    const [pLoading, setPLoading] = useState<boolean>(false);
    const [filter, setFilter] = useState<string>("")

    const [value, loading, error] = useCollection(
        collection(db, 'guides'),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    useEffect(() => {
        setPLoading(loading);

        if (!loading && value) {
            const allGuides = value.docs.map(
                (doc) => ({ ...doc.data() } as IGuideCard)
            );

            const filteredGuides = filter
                ? allGuides.filter((el) =>
                    el.name.toLowerCase().includes(filter.toLowerCase())
                )
                : allGuides;

            setGuides(filteredGuides);
        }
    }, [value, loading, filter]);

    return {
        guides,
        loading: pLoading,
        error,
        filter,
        setFilter
    }
}