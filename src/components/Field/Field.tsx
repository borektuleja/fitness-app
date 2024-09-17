import React from "react";

import { styled } from "@/utils";

import * as styles from "./styles";

export default React.forwardRef<HTMLInputElement, { icon: JSX.Element } & React.ComponentProps<"input">>(({ icon, className, ...delegated }, ref) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.icon}>
        {icon}
      </span>
      <input className={styled(styles.input, className)} ref={ref} {...delegated} />
    </div>
  );
});
