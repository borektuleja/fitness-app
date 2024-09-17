import { Dumbbell } from "lucide-react";
import Link from "next/link";

import Drawer from "@/components/Drawer";
import MobileInterface from "@/components/MobileInterface";

import DesktopMenu from "./components/DesktopMenu";
import MobileMenu from "./components/MobileMenu";

import * as styles from "./styles";

export default function Navbar() {
  return (
    <nav className={styles.wrapper}>
      <div className={styles.content}>
        <header className={styles.header}>
          <span className={styles.icon}>
            <Dumbbell />
          </span>
          <h2 className={styles.h}>BFLMPSVZ Training</h2>
        </header>
        <DesktopMenu />
        <Link href="/login" className={styles.button}>Přihlásit se</Link>
        <MobileInterface>
          <MobileMenu />
          <Drawer />
        </MobileInterface>
      </div>
    </nav>
  );
}
