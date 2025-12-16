import { useState } from "react";

interface NoteFormProps {
  onAdd: (text: string) => void;
}

export default function NoteForm({ onAdd }: NoteFormProps) {
  const [text, setText] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;

    onAdd(trimmed);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "12px" }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a note..."
      />
      <button type="submit">Add</button>
    </form>
  );
}
