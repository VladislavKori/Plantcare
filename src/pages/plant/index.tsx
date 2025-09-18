import { ImageSlider } from "@widgets/ImageSlider";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { UsefulParams } from "@widgets/UsefulParams";
import { Markdown } from "@widgets/Markdown";
import styles from "./style.module.scss";
import { Button, Spinner } from "@shared/ui";
import { useDocument } from "react-firebase-hooks/firestore";
import { doc } from "firebase/firestore";
import { db } from "@shared/utils/firebase";
import { BackHead } from "@widgets/BackHead";
import { useCollectionStore } from "@entities/collection/model";

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
    const collectionStore = useCollectionStore();

    const [value, loading, error] = useDocument(
        doc(db, 'plants', `plant_${params.id}`),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    if (loading) return <Spinner />
    if (error) return <p>Ошибка</p>
    if (!params.id || value?.data() === undefined) return <p>Растение не найдено</p>

    return (
        <>
            <BackHead
                id={value?.data()?.id}
                name={value?.data()?.name}
            />
            <ImageSlider
                images={value?.data()?.imageURLs}
            />
            <div className={styles["plant-text-block"]}>
                <div className={styles["plant-info"]}>
                    <h2 className={styles["plant-name"]}>{value?.data()?.name}</h2>
                    <p className={styles["plant-hint"]}>Indoor plant</p>
                </div>
                {/* <button>AI Chat</button> */}
            </div>
            <UsefulParams
                lighting={value?.data()?.params.light}
                temperature={value?.data()?.params.temp}
                humidity={value?.data()?.params.water}
            />

            <Markdown>
                {value?.data()?.content}
            </Markdown>

            <div className={styles["plant-action"]}>
                {collectionStore.plantIDExistInCollection(params.id) ? (
                    <Button fullWidth onClick={() => collectionStore.removeFromCollection(params.id as string)}>
                        Remove from garden
                    </Button>
                ) : (
                    <Button fullWidth onClick={() => collectionStore.addToCollection(params.id as string)}>
                        Add to garden
                    </Button>
                )}
            </div>
        </>
    )
}