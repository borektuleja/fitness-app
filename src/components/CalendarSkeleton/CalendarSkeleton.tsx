import * as styles from "./styles";

export default function CalendarSkeleton() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>Počkejte prosím...</span>
    </div>
  )
};
