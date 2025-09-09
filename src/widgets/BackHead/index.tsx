import { Button } from "@shared/ui";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

export const BackHead: FC = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Button onClick={() => navigate(-1)}>Назад</Button>
        </div>
    )
}