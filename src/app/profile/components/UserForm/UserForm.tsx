"use client";

import { Signature, User } from "lucide-react";
import { useFormState } from "react-dom";

import { updateUserAction } from "@/actions/user.actions";

import Button from "@/components/Button";
import Field from "@/components/Field";
import Form, { FormMessage } from "@/components/Form";

import { FormStatus, makeFormState } from "@/helpers/form.helpers";

import type { UserDto } from "@/loaders/user.loaders";

export default function UserForm({
  user
}: {
  user: UserDto
}) {
  const [{ status, message }, action] = useFormState(updateUserAction, makeFormState(FormStatus.INITIAL));
  return (
    <Form action={action}>
      <Field icon={<User />} type="text" name="fullname" defaultValue={user.fullname} placeholder="Jméno a příjmení" />
      <Field icon={<Signature />} type="text" name="username" defaultValue={user.username} placeholder="Uživatelské jméno" />
      <Button>Uložit změny</Button>
      <FormMessage data-success={status === FormStatus.SUCCESS}>
        {message}
      </FormMessage>
    </Form>
  );
}
