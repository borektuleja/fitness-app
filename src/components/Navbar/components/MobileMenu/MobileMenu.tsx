"use client";

import { Menu, X } from "lucide-react";

import useMobileContext from "@/hooks/use-mobile-context";

import * as styles from "./styles";

export default function MobileMenu() {
  const { on, toggle } = useMobileContext();
  return (
    <span className={styles.wrapper} onClick={() => toggle()}>
      {on ? <X /> : <Menu />}
    </span>
  );
}
