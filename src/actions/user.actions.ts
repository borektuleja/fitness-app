"use server";

import type { QueryError } from "mysql2";
import { z } from "zod";

import { makePassword } from "@/helpers/auth.helpers";
import { pool, processQueryError } from "@/helpers/database.helpers";
import {
  FormStatus,
  makeFormModel,
  makeFormState,
  type FormState
} from "@/helpers/form.helpers";

import { fetchToken } from "@/loaders/auth.loaders";

const updateUserSchema = z.object({
  fullname: z.string().trim().min(1),
  username: z.string().trim().min(1),
});

export async function updateUserAction(_: FormState, payload: FormData): Promise<FormState> {
  const model = makeFormModel(payload, ["fullname", "username"]);
  const validation = updateUserSchema.safeParse(model);

  if (!validation.success) {
    return makeFormState(FormStatus.FAILURE, "Vyplňte celý formulář.");
  }

  const { fullname, username } = validation.data;

  try {
    const token = await fetchToken();

    if (!token) {
      return makeFormState(FormStatus.FAILURE, "Neoprávněná operace.");
    }

    await pool.query(
      "UPDATE account SET fullname = ?, username = ? WHERE id = ?",
      [fullname, username, token.associate],
    );

    return makeFormState(FormStatus.SUCCESS, "Udáje byly změněny.");
  } catch (error) {
    return makeFormState(FormStatus.FAILURE, processQueryError(error as QueryError, {
      duplicateEntry: "Zadané uživatelské jméno je již obsazeno.",
    }));
  }
}

const updatePasswordSchema = z.object({
  actual: z.string().trim().min(1),
  repeat: z.string().trim().min(1),
});

export async function updatePasswordAction(_: FormState, payload: FormData): Promise<FormState> {
  const model = makeFormModel(payload, ["actual", "repeat"]);
  const validation = updatePasswordSchema.safeParse(model);

  if (!validation.success) {
    return makeFormState(FormStatus.FAILURE, "Vyplňte celý formulář.");
  }

  const { actual, repeat } = validation.data;

  if (actual !== repeat) {
    return makeFormState(FormStatus.FAILURE, "Hesla se neshodují.");
  }

  const hash = await makePassword(actual);

  try {
    const token = await fetchToken();

    if (!token) {
      return makeFormState(FormStatus.FAILURE, "Neoprávněná operace.");
    }

    await pool.query(
      "UPDATE account SET password = ? WHERE id = ?",
      [hash, token.associate],
    );

    return makeFormState(FormStatus.SUCCESS, "Heslo bylo změněno.");
  } catch (error) {
    return makeFormState(FormStatus.FAILURE, processQueryError(error as QueryError));
  }
}
