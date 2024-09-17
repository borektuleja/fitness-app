import type { RowDataPacket } from "mysql2";

import { pool } from "@/helpers/database.helpers";

export interface StatisticsDto extends RowDataPacket {
  fullname: string;
  weight?: number;
  backSquat?: number;
  frontSquat?: number;
  deadlift?: number;
  powerClean?: number;
  powerSnatch?: number;
  benchPress?: number;
  cleanAndJerk?: number;
  squatClean?: number;
  jerk?: number;
  squatSnatch?: number;
  overHeadSquat?: number;
  squatCleanThruster?: number;
}

export async function fetchStatistics(): Promise<StatisticsDto[]> {
  const [rows] = await pool.query<StatisticsDto[]>(
    "SELECT fullname, weight, backSquat, frontSquat, deadlift, powerClean, powerSnatch, benchPress, cleanAndJerk, squatClean, jerk, squatSnatch, overHeadSquat, squatCleanThruster FROM account WHERE id > 1",
  );

  return rows;
}
