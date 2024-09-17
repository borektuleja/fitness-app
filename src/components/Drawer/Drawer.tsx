"use client";

import Link from "next/link";

import useMobileContext from "@/hooks/use-mobile-context";

import Menu from "./components/Menu";

import * as styles from "./styles";

export default function Drawer() {
  const { on } = useMobileContext();
  return on ? (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Menu />
        <Link href="/login" className={styles.button}>Přihlásit se</Link>
      </div>
    </div>
  ) : null;
}
