import { useState } from "react";

function NoteInput({ onAdd }) {
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (text.trim().length === 0) return;

    onAdd(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nouvelle note..."
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default NoteInput;
