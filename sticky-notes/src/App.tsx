import { useState, useEffect } from 'react';
import { Note } from './types';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import './App.css';

function App() {
  // Lazy Init State from LocalStorage [cite: 61, 75]
  const [notes, setNotes] = useState<Note[]>(() => {
    const saved = localStorage.getItem('notes');
    return saved ? JSON.parse(saved) as Note[] : [];
  });

  // Save to LocalStorage whenever notes change [cite: 56]
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (text: string) => {
    const newNote: Note = { id: Date.now(), text };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter(n => n.id !== id));
  };

  return (
    <div className="app">
      <h1>Sticky Wall</h1>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}

export default App;