import { useState } from "react";

interface NoteFormProps {
  onAdd: (text: string) => void;
}

export default function NoteForm({ onAdd }: NoteFormProps) {
  const [text, setText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAdd(text);
        setText("");
      }}
    >
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
