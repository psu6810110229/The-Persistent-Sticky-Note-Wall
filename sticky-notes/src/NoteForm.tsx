import { useState } from 'react';

interface NoteFormProps {
  onAdd: (text: string) => void; // [cite: 35]
}

export default function NoteForm({ onAdd }: NoteFormProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => { // [cite: 65]
    e.preventDefault();
    if (!text.trim()) return; // Challenge: Prevent empty [cite: 60]
    
    onAdd(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
        placeholder="Type a note..."
      />
      <button type="submit">Add</button>
    </form>
  );
}