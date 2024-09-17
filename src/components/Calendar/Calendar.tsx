import Link from "next/link";

import { DAYS } from "@/constants";

import { getDateSlug, getFirstDayInMonth } from "@/helpers/calendar.helpers";

import { fetchCalendarPage } from "@/loaders/calendar.loaders";

import * as styles from "./styles";

export default async function Calendar({
  year,
  month
}: {
  year: number,
  month: number
}) {
  const offset = getFirstDayInMonth(year, month).getDay();
  const page = await fetchCalendarPage(year, month);
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.label}>{DAYS[(0 + offset) % 7]}</span>
        <span className={styles.label}>{DAYS[(1 + offset) % 7]}</span>
        <span className={styles.label}>{DAYS[(2 + offset) % 7]}</span>
        <span className={styles.label}>{DAYS[(3 + offset) % 7]}</span>
        <span className={styles.label}>{DAYS[(4 + offset) % 7]}</span>
        <span className={styles.label}>{DAYS[(5 + offset) % 7]}</span>
        <span className={styles.label}>{DAYS[(6 + offset) % 7]}</span>
      </div>
      <div className={styles.grid}>
        {page.map((dateOrNull, index) => dateOrNull ? (
          <Link href={`/training/${getDateSlug(dateOrNull)}`} className={styles.link} key={index}>
            {index + 1}
          </Link>
        ) : (
          <span className={styles.label} key={index}>
            {index + 1}
          </span>
        ))}
      </div>
    </div>
  );
}
