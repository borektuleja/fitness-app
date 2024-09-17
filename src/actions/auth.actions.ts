"use server";

import type { QueryError } from "mysql2";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

import {
  makeToken,
  matchPassword
} from "@/helpers/auth.helpers";
import { pool, processQueryError } from "@/helpers/database.helpers";
import {
  FormStatus,
  makeFormModel,
  makeFormState,
  type FormState
} from "@/helpers/form.helpers";

import { fetchCredentials } from "@/loaders/auth.loaders";

const signInSchema = z.object({
  username: z.string().trim().min(1),
  password: z.string().trim().min(1),
});

export async function signInAction(_: FormState, payload: FormData): Promise<FormState> {
  const model = makeFormModel(payload, ["username", "password"]);
  const validation = signInSchema.safeParse(model);

  if (!validation.success) {
    return makeFormState(FormStatus.FAILURE, "Vyplňte celý formulář.");
  }

  const { username, password } = validation.data;

  try {
    const credentials = await fetchCredentials(username);
    const credentialsMatch = credentials && (await matchPassword(password, credentials.hash));

    if (!credentialsMatch) {
      return makeFormState(FormStatus.FAILURE, "Neplatné uživatelské jméno nebo heslo.");
    }

    const token = makeToken(60);

    await pool.query(
      "INSERT INTO token (associate, hash, expiration) VALUES(?, ?, ?)",
      [credentials.id, token.hash, token.expiration],
    );

    cookies().set("AUTHTOKEN", token.hash, {
      expires: token.expiration,
      httpOnly: true,
      sameSite: "strict",
      // TODO: add HTTPS later
    });
  } catch (error) {
    return makeFormState(FormStatus.FAILURE, processQueryError(error as QueryError));
  }

  redirect("/profile");
}

export async function signOutAction(): Promise<void> {
  cookies().delete("AUTHTOKEN");
}
