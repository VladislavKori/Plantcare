import {
    NotFoundPage,
    HomePage,
    CollectionPage,
    GuidesPage,
    GuidePage,
    PlantPage
} from "@pages/index";
import { FC, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultLayout } from "../layouts/DefaultLayout";
import { useCollectionStore } from "@entities/collection/model";
import { WithoutNavbarLayout } from "../layouts/WithoutNavbar";

export const AppRouter: FC = () => {
    const { loadCollection } = useCollectionStore();

    useEffect(() => {
        loadCollection()
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/guides" element={<GuidesPage />} />
                    <Route path="/guide/:id" element={<GuidePage />} />
                    <Route path="/collection" element={<CollectionPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
                <Route element={<WithoutNavbarLayout />}>
                    <Route path="/plant/:id" element={<PlantPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}