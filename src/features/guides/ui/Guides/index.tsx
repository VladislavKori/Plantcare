import { Input } from "@shared/ui";
import { FC } from "react";
import SearchIcon from "@shared/assets/search.svg?react"
import { GuideList } from "@widgets/GuideList";
import { guides } from "./mock";

export const GuidesTable: FC = () => {
    return (
        <>
            <Input placeholder="Search" startContent={<SearchIcon />} />
            <GuideList data={guides} />
        </>
    )
}