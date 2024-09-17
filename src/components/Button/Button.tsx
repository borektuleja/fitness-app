"use client";

import React from "react";
import { useFormStatus } from "react-dom";

import { styled } from "@/utils";

import * as styles from "./styles";

export default React.forwardRef<HTMLButtonElement, Omit<React.ComponentProps<"button">, "type" | "disabled">>(({ className, ...delegated }, ref) => {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className={styled(styles.wrapper, className)} ref={ref} {...delegated} />
  );
});
