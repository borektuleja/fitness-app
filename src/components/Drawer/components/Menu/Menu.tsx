import Link from "next/link";

import { LINKS } from "@/constants";

import * as styles from "./styles";

export default function Menu() {
  return (
    <ul className={styles.wrapper}>
      {LINKS.map(({ href, label }) => (
        <li key={label}>
          <Link href={href} className={styles.link}>
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
