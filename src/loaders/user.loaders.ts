import type { RowDataPacket } from "mysql2/promise";

import { pool } from "@/helpers/database.helpers";

export interface UserDto extends RowDataPacket { fullname: string; username: string; }

export async function fetchUser(id: number): Promise<UserDto | null> {
  const [rows] = await pool.query<UserDto[]>(
    "SELECT fullname, username FROM account WHERE id = ?",
    [id],
  );

  return (rows.length > 0) ? rows[0] : null;
}
