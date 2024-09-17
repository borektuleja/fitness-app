"use client";

import { KeyRound } from "lucide-react";
import { useFormState } from "react-dom";

import { updatePasswordAction } from "@/actions/user.actions";

import Button from "@/components/Button";
import Field from "@/components/Field";
import Form, { FormMessage } from "@/components/Form";

import { FormStatus, makeFormState } from "@/helpers/form.helpers";

export default function PasswordForm() {
  const [{ status, message }, action] = useFormState(updatePasswordAction, makeFormState(FormStatus.INITIAL));
  return (
    <Form action={action}>
      <Field icon={<KeyRound />} type="password" name="actual" placeholder="Heslo" />
      <Field icon={<KeyRound />} type="password" name="repeat" placeholder="Heslo znovu" />
      <Button>Uložit změny</Button>
      <FormMessage data-success={status === FormStatus.SUCCESS}>
        {message}
      </FormMessage>
    </Form>
  );
}
