import { MessageSquareText } from "lucide-react";

import type { NoteDto } from "@/loaders/note.loaders";

import * as styles from "./styles";

export default function Comment({
  note
}: {
  note: NoteDto
}) {
  return (
    <article className={styles.wrapper}>
      <span className={styles.label}>
        {`Vloženo ${note.createdAt.toLocaleString()}`}
      </span>
      <header className={styles.header}>
        <span className={styles.icon}>
          <MessageSquareText />
        </span>
        <h3 className={styles.title}>
          {`Komentář od ${note.author}`}
        </h3>
      </header>
      <p className={styles.p}>
        {note.content}
      </p>
    </article>
  );
}
