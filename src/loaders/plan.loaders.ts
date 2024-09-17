import type { RowDataPacket } from "mysql2";

import { pool } from "@/helpers/database.helpers";

export interface PlanDto extends RowDataPacket { id: number, content: string, scheduledOn: Date }

export async function fetchPlan(year: number, month: number, day: number): Promise<PlanDto | null> {
  const [rows] = await pool.query<PlanDto[]>(
    "SELECT id, content, scheduledOn FROM plan WHERE YEAR(scheduledOn) = ? AND MONTH(scheduledOn) = ? AND DAY(scheduledOn) = ?",
    [year, month, day],
  );

  return (rows.length > 0) ? rows[0] : null;
}
