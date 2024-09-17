"use server";

import type { QueryError } from "mysql2";
import { revalidatePath } from "next/cache";
import { z } from "zod";

import { pool, processQueryError } from "@/helpers/database.helpers";
import {
  FormStatus,
  makeFormModel,
  makeFormState,
  type FormState
} from "@/helpers/form.helpers";

import { fetchToken } from "@/loaders/auth.loaders";

const createNoteSchema = z.object({
  content: z.string().trim().min(1),
});

export async function createNoteAction(id: number, _: FormState, payload: FormData): Promise<FormState> {
  const model = makeFormModel(payload, ["content"]);
  const validation = createNoteSchema.safeParse(model);

  if (!validation.success) {
    return makeFormState(FormStatus.FAILURE, "Vyplňte celý formulář.");
  }

  const { content } = validation.data;

  try {
    const token = await fetchToken();

    if (!token) {
      return makeFormState(FormStatus.FAILURE, "Neoprávněná operace.");
    }

    await pool.query(
      "INSERT INTO note (author, container, content) VALUES(?, ?, ?)",
      [token.associate, id, content],
    );

    revalidatePath("/training");

    return makeFormState(FormStatus.SUCCESS, "");
  } catch (error) {
    return makeFormState(FormStatus.FAILURE, processQueryError(error as QueryError));
  }
}
