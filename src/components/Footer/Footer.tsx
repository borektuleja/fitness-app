import * as styles from "./styles";

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.content}>
        <span className={styles.label}>
          &copy; Bořek Tuleja 2024
        </span>
      </div>
    </footer>
  );
}
