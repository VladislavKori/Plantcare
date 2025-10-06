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
import { useTranslation } from "react-i18next";

export interface IPlantData {
    id: string;
    imageURLs: string[];
    name: string;
    nameEn: string;
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
    const { i18n, t } = useTranslation("", { keyPrefix: "plant" });
    const { t: commonT } = useTranslation("", { keyPrefix: "common" });
    const collectionStore = useCollectionStore();

    const [value, loading, error] = useDocument(
        doc(db, 'plants', `plant_${params.id}`),
        {
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    );

    if (loading) return <Spinner />
    if (error) return <p>{commonT("error")}</p>
    if (!params.id || value?.data() === undefined) return <p>{t("not-found")}</p>

    return (
        <>
            <BackHead
                id={value?.data()?.id}
                name={value?.data()?.[i18n.language === "ru" ? "name" : "nameEn"]}
            />
            <ImageSlider
                images={value?.data()?.imageURLs}
            />
            <div className={styles["plant-text-block"]}>
                <div className={styles["plant-info"]}>
                    <h2 className={styles["plant-name"]}>
                        {value?.data()?.[i18n.language === "ru" ? "name" : "nameEn"]}
                    </h2>
                    <p className={styles["plant-hint"]}>{t("indoor-plant")}</p>
                </div>
                {/* <button>AI Chat</button> */}
            </div>
            <UsefulParams
                lighting={value?.data()?.params.light}
                temperature={value?.data()?.params.temp}
                humidity={value?.data()?.params.water}
            />

            <Markdown>
                {value?.data()?.[i18n.language === "ru" ? "content" : "contentEn"]}
            </Markdown>

            <div className={styles["plant-action"]}>
                {collectionStore.plantIDExistInCollection(params.id) ? (
                    <Button fullWidth onClick={() => collectionStore.removeFromCollection(params.id as string)}>
                        {t("remove-from-garden")}
                    </Button>
                ) : (
                    <Button fullWidth onClick={() => collectionStore.addToCollection(params.id as string)}>
                        {t("add-from-garden")}
                    </Button>
                )}
            </div>
        </>
    )
}