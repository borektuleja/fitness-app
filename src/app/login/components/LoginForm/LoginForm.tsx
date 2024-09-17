"use client";

import { KeyRound, User } from "lucide-react";
import { useFormState } from "react-dom";

import { signInAction } from "@/actions/auth.actions";

import Button from "@/components/Button";
import Field from "@/components/Field";
import Form, { FormMessage } from "@/components/Form";

import { FormStatus, makeFormState } from "@/helpers/form.helpers";

export default function LoginForm() {
  const [{ message }, action] = useFormState(signInAction, makeFormState(FormStatus.INITIAL));
  return (
    <Form action={action}>
      <Field icon={<User />} type="text" name="username" placeholder="Uživatelské jméno" required />
      <Field icon={<KeyRound />} type="password" name="password" placeholder="Heslo" required />
      <Button>Přihlásit se</Button>
      <FormMessage>
        {message}
      </FormMessage>
    </Form>
  );
}
