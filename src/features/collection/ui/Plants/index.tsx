import { FC } from "react";
import { useCollectionStore } from "../../../../entities/collection/model";
import { CollectionCard } from "../CollectionCard";

export const CollectionPlants: FC = () => {
    const collectionStore = useCollectionStore()

    return (
        <>
            {collectionStore.collectionIDs.map(id => (
                <CollectionCard id={id} />
            ))}
        </>
    )
}