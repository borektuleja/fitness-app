import * as styles from "./styles";

export default function Tab({
  icon,
  label
}: {
  icon: JSX.Element,
  label: string
}) {
  return (
    <article className={styles.wrapper}>
      <header className={styles.header}>
        <span className={styles.icon}>
          {icon}
        </span>
        <h3 className={styles.h}>
          {label}
        </h3>
      </header>
    </article>
  );
}
