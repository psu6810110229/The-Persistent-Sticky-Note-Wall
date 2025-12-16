import { useState } from "react";
import type { Note } from "./types";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

export default function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = (text: string) => {
    
    const trimmed = text.trim();
    if(!trimmed) return;

    const newNote: Note = {
      id: Date.now(),
      text: trimmed,
    };
    
    setNotes((prev) => [newNote, ...prev]);
    //setNotes([newNote]);

  };
  
  return (
    <div>

      <h1>Sticky Note Wall</h1>

      <NoteForm onAdd={(addNote)}/>

      <NoteList notes={notes}/>
      
    </div>
  )
}