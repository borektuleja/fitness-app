import Comment from "@/components/Comment";

import { fetchNotes } from "@/loaders/note.loaders";

import * as styles from "./styles";

export default async function CommentList({
  id
}: {
  id: number
}) {
  const notes = await fetchNotes(id);
  return (
    <div className={styles.wrapper}>
      {notes.map((note, index) => (
        <Comment note={note} key={index} />
      ))}
    </div>
  );
}
