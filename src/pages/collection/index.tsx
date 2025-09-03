import { FC } from "react";
import { CollectionPlants, User } from "@features/collection/ui";

export const CollectionPage: FC = () => {
    return (
        <>
            <User />
            <CollectionPlants />
        </>
    )
}