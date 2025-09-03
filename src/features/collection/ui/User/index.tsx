import { FC } from "react";

export const User: FC = () => {
    return (
        <div>
            This is user

            <pre>
                {JSON.stringify(window.Telegram, null, 2)}
            </pre>
        </div>
    )
}