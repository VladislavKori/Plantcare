import { FC } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import styles from "./style.module.scss";

interface MarkdownProp {
    children: string | null | undefined;
}

export const Markdown: FC<MarkdownProp> = (props) => {
    const { children } = props;

    return (
        <div className={styles["markdown"]}>
            <ReactMarkdown remarkPlugins={[remarkGfm]} >
            {children}
        </ReactMarkdown>
    </div >
  );
};