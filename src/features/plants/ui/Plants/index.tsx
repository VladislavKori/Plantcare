import { FC } from "react";
import { Input, Spinner } from "@shared/ui";
import SearchIcon from "@shared/assets/search.svg?react"
import { PlantList } from "@widgets/PlantList";
import { usePlants } from "@features/plants/hooks/usePlants";
import styles from "./style.module.scss";

export const HomePlants: FC = () => {
    const { plants, loading, error, filter, setFilter } = usePlants();

    if (loading) return <div className={styles["loading"]}><Spinner /></div>
    if (error) return <p>Произошла ошибка</p>

    return (
        <>
            <Input
                placeholder="Поиск"
                startContent={<SearchIcon />}
                value={filter}
                onChange={e => setFilter(e.target.value)}
            />
            <PlantList data={plants} />
        </>
    )
}