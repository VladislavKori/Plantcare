import { ImageSlider } from "@widgets/ImageSlider";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { plantMock } from "./mock";
import { UsefulParams } from "@widgets/UsefulParams";
import { Markdown } from "@widgets/Markdown";
import styles from "./style.module.scss";
import { Button } from "@shared/ui";

export interface IPlantData {
    id: string;
    imageURLs: string[];
    name: string;
    description: string;
    content: string;
    params: {
        light?: string;
        temp?: string;
        water?: string
    };
    created_at: string;
}

export const PlantPage: FC = () => {
    const params = useParams<{ id: string }>();

    return (
        <>
            <ImageSlider
                images={plantMock.imageURLs}
            />
            <UsefulParams
                light={plantMock.params.light}
                temp={plantMock.params.temp}
                water={plantMock.params.water}
            />
            <h2 className={styles["plant-name"]}>{plantMock.name}</h2>
            <p className={styles["plant-description"]}>{plantMock.description}</p>
            <Button fullWidth>Добавить в Коллекцию</Button>
            <Markdown>
                {plantMock.content}
            </Markdown>
        </>
    )
}