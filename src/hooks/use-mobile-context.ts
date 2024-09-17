import React from "react";

import type useToggle from "@/hooks/use-toggle";

export const MobileContext = React.createContext<ReturnType<typeof useToggle> | null>(null);

export default function useMobileContext() {
  const context = React.useContext(MobileContext);

  if (context === null) {
    throw new Error("Cannot access MobileContext out of a provider.");
  }

  return context;
}
