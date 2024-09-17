"use client";

import { usePathname } from "next/navigation";
import React from "react";

import { MobileContext } from "@/hooks/use-mobile-context";
import useToggle from "@/hooks/use-toggle";

export default function MobileInterface({
  children
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname();
  const { on, toggle } = useToggle();

  React.useEffect(() => toggle(false), [pathname]);

  return (
    <MobileContext.Provider value={{ on, toggle }}>
      {children}
    </MobileContext.Provider>
  );
}
