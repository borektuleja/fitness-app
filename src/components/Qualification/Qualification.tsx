import { CircleCheck } from "lucide-react";

import * as styles from "./styles";

export default function Qualification({
  label,
  content
}: {
  label: string,
  content: string
}) {
  return (
    <article className={styles.wrapper}>
      <header className={styles.header}>
        <span className={styles.icon}>
          <CircleCheck />
        </span>
        <h3 className={styles.h}>
          {label}
        </h3>
      </header>
      <p className={styles.p}>
        {content}
      </p>
    </article>
  );
}
