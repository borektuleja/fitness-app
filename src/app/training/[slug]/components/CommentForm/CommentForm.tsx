"use client";

import React from "react";
import { useFormState } from "react-dom";

import { createNoteAction } from "@/actions/note.actions";

import Button from "@/components/Button";
import Form, { FormMessage } from "@/components/Form";
import Textarea from "@/components/Textarea";

import { FormStatus, makeFormState } from "@/helpers/form.helpers";

export default function CommentForm({
  id
}: {
  id: number
}) {
  const ref = React.useRef<HTMLFormElement>(null);
  const [{ status, message }, action] = useFormState(createNoteAction.bind(null, id), makeFormState(FormStatus.INITIAL));

  if (status === FormStatus.SUCCESS) {
    ref.current?.reset();
  }

  return (
    <Form action={action} className="max-w-6xl" ref={ref}>
      <Textarea name="content" rows={3} placeholder="Napište komentář k tréninku..." required />
      <Button>Přidat komentář</Button>
      <FormMessage data-success={status === FormStatus.SUCCESS}>
        {message}
      </FormMessage>
    </Form>
  );
}
