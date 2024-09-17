"use client";

import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { MONTHS } from "@/constants";

import { makeYearTransition } from "@/helpers/calendar.helpers";

import * as styles from "./styles";

export default function Settings({
  year,
  month,
}: {
  year: number,
  month: number
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function transition(month: number) {
    const { nextYear, nextMonth } = makeYearTransition(year, month);
    const params = new URLSearchParams(searchParams);
    params.set("year", nextYear.toString());
    params.set("month", nextMonth.toString());
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className={styles.wrapper}>
      <span className={styles.icon} onClick={() => transition(month - 1)}>
        <ArrowBigLeft/>
      </span>
      <span className={styles.label}>
        {`${MONTHS[month - 1]} ${year}`}
      </span>
      <span className={styles.icon} onClick={() => transition(month + 1)}>
        <ArrowBigRight />
      </span>
    </div>
  );
}
