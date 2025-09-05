import { FC } from "react";
import styles from "./style.module.scss";
import { IGuideCardProps } from "@widgets/GuideCard/type";
import { GuideCard } from "@widgets/GuideCard";

export interface IGuideListProps {
    data: IGuideCardProps[]
}

export const GuideList: FC<IGuideListProps> = (props) => {
    return (
        <div className={styles["list"]}>
            {props.data.map(item => (
                <GuideCard {...item} />
            ))}
        </div>
    )
}