import Scroll from "@/components/Scroll";

import * as styles from "./styles";

export default function ChartWrapper({
  title,
  children
}: {
  title: string,
  children: React.ReactNode
}) {
  return (
    <article className={styles.wrapper}>
      <header>
        <h3 className={styles.title}>{title}</h3>
      </header>
      <Scroll className="max-w-xl">
        {children}
      </Scroll>
    </article>
  );
}
