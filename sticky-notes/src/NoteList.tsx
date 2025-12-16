import type { Note } from "./types";

interface NoteListProps {
  notes: Note[];
}

export default function NoteList({ notes }: NoteListProps) {
  return (
    <div>
      {notes.map((note) => (
        <div key={note.id} style={{ border: "1px solid #ccc", margin: "5px", padding: "10px" }}>
          {note.text}
        </div>
      ))}
    </div>
  );
}
