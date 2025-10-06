import { FC, useState } from "react";
import styles from "./style.module.scss";
import { Dropdown } from "@shared/ui/Dropdown";
import { DropdownTrigger } from "@shared/ui/Dropdown/dropdown-trigger";
import { DropdownMenu } from "@shared/ui/Dropdown/dropdown-menu";
import { useTranslation } from "react-i18next";
import clsx from "clsx";

export const LanguageSwitch: FC = () => {
    const { t, i18n } = useTranslation();
    const [closeTrigger, setCloseTrigger] = useState<boolean>(false);

    return (
        <div className={styles["row"]}>
            <p className={styles["title"]}>Язык</p>
            <Dropdown side="right" closeTrigger={closeTrigger}>
                <DropdownTrigger>
                    <p className={styles["lang"]}>{t("common.language")}</p>
                </DropdownTrigger>
                <DropdownMenu>
                    <div className={styles["buttons"]}>
                        <button
                            className={clsx(
                                styles["button"],
                                i18n.language === "ru" && styles["button-active"]
                            )}
                            onClick={() => {
                                i18n.changeLanguage("ru");
                                setCloseTrigger(prev => !prev)
                            }}
                        >
                            Русский
                        </button>
                        <button
                            className={clsx(
                                styles["button"],
                                i18n.language === "en" && styles["button-active"]
                            )}
                            onClick={() => {
                                i18n.changeLanguage("en");
                                setCloseTrigger(prev => !prev);
                            }}
                        >
                            English
                        </button>
                    </div>
                </DropdownMenu>
            </Dropdown>
        </div>
    )
}