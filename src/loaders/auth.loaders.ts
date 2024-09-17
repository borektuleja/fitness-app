import type { RowDataPacket } from "mysql2/promise";
import { cookies } from "next/headers";

import { pool } from "@/helpers/database.helpers";

interface CredentialsDto extends RowDataPacket { id: number; hash: string; }

export async function fetchCredentials(username: string): Promise<CredentialsDto | null> {
  const [rows] = await pool.query<CredentialsDto[]>(
    "SELECT id, password AS hash FROM account WHERE username = ?",
    [username],
  );

  return (rows.length > 0) ? rows[0] : null;
}

interface TokenDto extends RowDataPacket { associate: number; expiration: Date; }

export async function fetchToken(): Promise<TokenDto | null> {
  const AUTHTOKEN = cookies().get("AUTHTOKEN")?.value;

  if (!AUTHTOKEN) {
    return null;
  }
  
  const [rows] = await pool.query<TokenDto[]>(
    "SELECT associate, expiration FROM token WHERE hash = ?",
    [AUTHTOKEN],
  );

  return (rows.length > 0 && rows[0].expiration.valueOf() > Date.now()) ? rows[0] : null;
}
