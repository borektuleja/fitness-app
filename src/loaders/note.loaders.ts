import type { RowDataPacket } from "mysql2";

import { pool } from "@/helpers/database.helpers";

export interface NoteDto extends RowDataPacket { content: string, createdAt: Date, author: string }

export async function fetchNotes(id: number): Promise<NoteDto[]> {
  const [rows] = await pool.query<NoteDto[]>(
    "SELECT content, createdAt, fullname AS author FROM note JOIN account ON note.author = account.id WHERE container = ?",
    [id]
  );

  return rows;
}
