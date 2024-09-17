import bcrypt from "bcrypt";
import crypto from "node:crypto";

export async function makePassword(raw: string) {
  return await bcrypt.hash(raw, 10);
}

export async function matchPassword(raw: string, hash: string) {
  return await bcrypt.compare(raw, hash);
}

export function makeToken(durationInMinutes: number) {
  const hash = crypto.randomBytes(64).toString("hex");
  const expiration = new Date(Date.now() + 60 * 1000 * durationInMinutes);
  return ({ hash, expiration });
}
