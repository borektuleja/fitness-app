import clsx, { type ClassValue } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

export const styled = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const withStyles = <T extends keyof JSX.IntrinsicElements>(
  element: T,
  styles: string
) => {
  return React.forwardRef<
    T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : never,
    React.ComponentProps<T>
  >(({ className, children, ...delegated }, ref) => {
    return React.createElement(
      element,
      { className: styled(styles, className), ref, ...delegated },
      children
    );
  });
};
