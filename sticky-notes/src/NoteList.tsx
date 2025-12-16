import { Note } from './types';

interface NoteListProps {
  notes: Note[];
  onDelete: (id: number) => void; // [cite: 49]
}

export default function NoteList({ notes, onDelete }: NoteListProps) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <div key={note.id} className="note-item">
          <span>{note.text}</span>
          <button onClick={() => onDelete(note.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}