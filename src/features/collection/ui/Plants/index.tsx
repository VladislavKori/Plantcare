import { FC } from "react";
import { Input } from "@shared/ui";
import SearchIcon from "@shared/assets/search.svg?react"
import { PlantList } from "@widgets/PlantList";
import { plantList } from "./mock";

export const CollectionPlants: FC = () => {
    return (
        <>
            <Input placeholder="Search" startContent={<SearchIcon />} />
            <PlantList data={plantList} />
        </>
    )
}