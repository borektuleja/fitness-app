import type { RowDataPacket } from "mysql2";

import { getDaysInMonth } from "@/helpers/calendar.helpers";
import { pool } from "@/helpers/database.helpers";

interface DateDto extends RowDataPacket { scheduledOn: Date };

export type CalendarPageDto = Array<Date | null>;

export async function fetchCalendarPage(year: number, month: number): Promise<CalendarPageDto> {
  const days: CalendarPageDto = new Array(getDaysInMonth(year, month)).fill(null);

  const [rows] = await pool.query<DateDto[]>(
    "SELECT scheduledOn FROM plan WHERE category = 'elite' AND YEAR(scheduledOn) = ? AND MONTH(scheduledOn) = ? ORDER BY scheduledOn",
    [year, month],
  );

  for (const { scheduledOn } of rows) {
    days[scheduledOn.getDate() - 1] = scheduledOn;
  }
  
  return days;
}
