import { useState } from "react";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";
import "./App.css";
import type { Note } from "./types";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (text: string) => {
    const newNote: Note = {
      id: Date.now(),
      text,
    };
    setNotes((prev) => [...prev, newNote]);
  };

  return (
    <div className="app">
      <h1>Sticky Note Wall</h1>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} />
    </div>
  );
}

export default App;
